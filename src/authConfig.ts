import type { Configuration } from '@azure/msal-browser';
import { LogLevel } from '@azure/msal-browser';

const AZURE_CLIENT_ID = '3399c0c0-2f34-4143-89ac-cb568dc31c57';
const AZURE_TENANT_ID = '16b3c013-d300-468d-ac64-7eda0820b6d3';

export const msalConfig: Configuration = {
  auth: {
    clientId: AZURE_CLIENT_ID,
    authority: `https://login.microsoftonline.com/${AZURE_TENANT_ID}`,
    redirectUri: window.location.origin,
    postLogoutRedirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: 'localStorage',
  },
  system: {
    loggerOptions: {
      loggerCallback: (_level, message, containsPii) => {
        if (containsPii) return;
        if (_level === LogLevel.Error) console.error(message);
      },
    },
  },
};

export const loginRequest = {
  scopes: ['User.Read', 'openid', 'profile', 'email'],
};
