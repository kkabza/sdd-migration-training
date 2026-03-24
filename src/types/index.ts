// Content block types

export interface HeadingBlock {
  type: 'heading';
  level: 2 | 3;
  text: string;
}

export interface TextBlock {
  type: 'text';
  text: string;
}

export interface ListBlock {
  type: 'list';
  style: 'ordered' | 'unordered';
  items: string[];
}

export interface CodeBlock {
  type: 'code';
  language: 'bash' | 'typescript' | 'json' | 'markdown' | 'text';
  code: string;
  caption?: string;
}

export interface TableBlock {
  type: 'table';
  headers: string[];
  rows: string[][];
}

export interface CalloutBlock {
  type: 'callout';
  variant: 'info' | 'warning' | 'tip';
  title?: string;
  text: string;
}

export interface ImageBlock {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export interface MediaBlock {
  type: 'media';
  media: MediaItem;
}

export interface Slide {
  startTime: number;
  title: string;
  subtitle?: string;
  bullets?: string[];
  image?: string;
  callout?: { variant: 'info' | 'warning' | 'tip'; text: string };
  layout?: 'title' | 'bullets' | 'split' | 'callout';
}

export interface SlideshowBlock {
  type: 'slideshow';
  audioSrc: string;
  slides: Slide[];
}

export type ContentBlock =
  | HeadingBlock
  | TextBlock
  | ListBlock
  | CodeBlock
  | TableBlock
  | CalloutBlock
  | ImageBlock
  | MediaBlock
  | SlideshowBlock;

/* ----- Media ----- */

export interface MediaItem {
  id: string;
  mediaType: 'video' | 'audio';
  src: string;
  title: string;
  poster?: string;
  captionsSrc?: string;
  duration?: string;
}

/* ----- Quiz ----- */

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

/* ----- Structure ----- */

export interface Lesson {
  id: string;
  number: number;
  moduleId: string;
  title: string;
  duration: string;
  content: ContentBlock[];
  quiz?: QuizQuestion[];
}

export interface Module {
  id: string;
  number: number;
  dayId: string;
  title: string;
  description: string;
  duration: string;
  objectives: string[];
  lessons: Lesson[];
}

export interface Day {
  id: string;
  number: number;
  title: string;
  description: string;
  moduleIds: string[];
}

export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  days: Day[];
  modules: Module[];
}

/* ----- Progress ----- */

export interface Progress {
  completedLessons: Record<string, boolean>;
  mediaPositions: Record<string, number>;
  lastVisitedLesson?: string;
}
