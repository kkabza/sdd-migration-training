import type { ContentBlock } from '@/types';
import { CodeBlock } from '../CodeBlock/CodeBlock';
import { Callout } from '../Callout/Callout';
import { VideoPlayer } from '../MediaPlayer/VideoPlayer';
import { AudioPlayer } from '../MediaPlayer/AudioPlayer';
import { SlidePlayer } from '../SlidePlayer/SlidePlayer';
import styles from './ContentRenderer.module.css';

interface Props {
  blocks: ContentBlock[];
}

export function ContentRenderer({ blocks }: Props) {
  return (
    <div className={styles.content}>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'heading':
            return block.level === 2
              ? <h2 key={i}>{block.text}</h2>
              : <h3 key={i}>{block.text}</h3>;
          case 'text':
            return <p key={i} className={styles.paragraph}>{block.text}</p>;
          case 'list':
            return block.style === 'ordered' ? (
              <ol key={i} className={`${styles.list} ${styles.ordered}`}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ol>
            ) : (
              <ul key={i} className={`${styles.list} ${styles.unordered}`}>
                {block.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            );
          case 'code':
            return <CodeBlock key={i} language={block.language} code={block.code} caption={block.caption} />;
          case 'table':
            return (
              <table key={i} className={styles.table}>
                <thead>
                  <tr>
                    {block.headers.map((h, j) => <th key={j}>{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, j) => (
                    <tr key={j}>
                      {row.map((cell, k) => <td key={k}>{cell}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          case 'callout':
            return <Callout key={i} variant={block.variant} title={block.title} text={block.text} />;
          case 'image':
            return (
              <figure key={i} className={styles.figure}>
                <img src={block.src} alt={block.alt} className={styles.image} loading="lazy" />
                {block.caption && <figcaption className={styles.caption}>{block.caption}</figcaption>}
              </figure>
            );
          case 'media':
            return block.media.mediaType === 'video'
              ? <VideoPlayer key={i} media={block.media} />
              : <AudioPlayer key={i} media={block.media} />;
          case 'slideshow':
            return <SlidePlayer key={i} audioSrc={block.audioSrc} slides={block.slides} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
