import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import type { AccountInfo, PublicClientApplication as PCA } from '@azure/msal-browser';

interface MsalContextType {
  accounts: AccountInfo[];
  inProgress: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
}

const MsalContext = createContext<MsalContextType | undefined>(undefined);

export function useMsal() {
  const ctx = useContext(MsalContext);
  if (!ctx) throw new Error('useMsal must be used within MsalProvider');
  return ctx;
}

export const MsalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [accounts, setAccounts] = useState<AccountInfo[]>([]);
  const [inProgress, setInProgress] = useState(true);
  const instanceRef = useRef<PCA | null>(null);
  const initRef = useRef<Promise<PCA> | null>(null);

  useEffect(() => {
    const initialize = async () => {
      if (initRef.current) {
        const instance = await initRef.current;
        instanceRef.current = instance;
        setAccounts(instance.getAllAccounts());
        setInProgress(false);
        return;
      }

      initRef.current = (async () => {
        const { PublicClientApplication, EventType } = await import('@azure/msal-browser');
        const { msalConfig } = await import('./authConfig');

        const instance = new PublicClientApplication(msalConfig);
        await instance.initialize();

        // Process any auth code from redirect flow
        try {
          const response = await instance.handleRedirectPromise();
          if (response?.account) {
            instance.setActiveAccount(response.account);
            setAccounts([response.account]);
          }
        } catch (err) {
          console.error('handleRedirectPromise error:', err);
        }

        instance.addEventCallback((event: any) => {
          if (event.eventType === EventType.LOGIN_SUCCESS && event.payload?.account) {
            instance.setActiveAccount(event.payload.account);
            setAccounts([event.payload.account]);
          }
        });

        return instance;
      })();

      try {
        const instance = await initRef.current;
        instanceRef.current = instance;
        setAccounts((prev) => (prev.length > 0 ? prev : instance.getAllAccounts()));
      } catch (error) {
        console.error('MSAL initialization error:', error);
        initRef.current = null;
      } finally {
        setInProgress(false);
      }
    };

    initialize();
  }, []);

  const login = async () => {
    if (!instanceRef.current) return;
    // Use redirect flow — popups are blocked on many browsers/SWA
    const { loginRequest } = await import('./authConfig');
    await instanceRef.current.loginRedirect({
      ...loginRequest,
      prompt: 'select_account',
    });
  };

  const logout = async () => {
    if (!instanceRef.current) return;
    await instanceRef.current.logoutRedirect({
      postLogoutRedirectUri: '/',
    });
  };

  return (
    <MsalContext.Provider value={{ accounts, inProgress, login, logout }}>
      {children}
    </MsalContext.Provider>
  );
};
