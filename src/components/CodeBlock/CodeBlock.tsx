import { useState, useCallback } from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import { copyToClipboard } from '@/utils/clipboard';
import type { CodeBlock as CodeBlockType } from '@/types';
import styles from './CodeBlock.module.css';

type Props = Omit<CodeBlockType, 'type'>;

export function CodeBlock({ language, code, caption }: Props) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    const ok = await copyToClipboard(code);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [code]);

  return (
    <div className={styles.wrapper}>
      {caption && <div className={styles.caption}>{caption}</div>}
      <div className={styles.header}>
        <span className={styles.language}>{language}</span>
        <button
          className={`${styles.copyButton} ${copied ? styles.copied : ''}`}
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <Highlight theme={themes.vsDark} code={code} language={language === 'text' ? 'bash' : language}>
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className={styles.pre}>
            <code>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, j) => (
                    <span key={j} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </code>
          </pre>
        )}
      </Highlight>
    </div>
  );
}
