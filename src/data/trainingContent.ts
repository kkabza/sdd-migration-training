import type { Course, Day, Module, Lesson } from '@/types';
import { foundationsDay1Modules } from './foundations-day1';
import { foundationsDay2Modules } from './foundations-day2';
import { foundationsDay3Modules } from './foundations-day3';
import { migrationDay1Modules } from './migration-day1';
import { migrationDay2Modules } from './migration-day2';
import { migrationDay3Modules } from './migration-day3';

/* ----- Foundations Course ----- */

const foundationsDays: Day[] = [
  {
    id: 'f-day-1',
    number: 1,
    title: 'Foundations & Specification',
    description: 'Understand the SDD paradigm, set up your environment, and master the constitution and specification steps.',
    moduleIds: ['f-module-1', 'f-module-2'],
  },
  {
    id: 'f-day-2',
    number: 2,
    title: 'Planning & Implementation',
    description: 'Transform specs into technical plans, generate tasks, and execute the implementation step to produce working code.',
    moduleIds: ['f-module-3', 'f-module-4'],
  },
  {
    id: 'f-day-3',
    number: 3,
    title: 'Advanced Patterns & Governance',
    description: 'Apply SDD to real-world scenarios, establish governance practices, and complete your capstone project.',
    moduleIds: ['f-module-5', 'f-module-6'],
  },
];

const foundationsModules: Module[] = [
  ...foundationsDay1Modules,
  ...foundationsDay2Modules,
  ...foundationsDay3Modules,
];

/* ----- Migration Course ----- */

const migrationDays: Day[] = [
  {
    id: 'm-day-1',
    number: 1,
    title: 'Discovery & Reverse Engineering',
    description: 'Understand why migrations fail, set up the spec pipeline, and reverse-engineer a legacy codebase into a formal AS-IS specification.',
    moduleIds: ['m-module-1', 'm-module-2'],
  },
  {
    id: 'm-day-2',
    number: 2,
    title: 'Re-Architecture & Migration Planning',
    description: 'Transform the AS-IS spec into a cloud target spec, produce the migration plan, and specify data migration and integration contracts.',
    moduleIds: ['m-module-3', 'm-module-4'],
  },
  {
    id: 'm-day-3',
    number: 3,
    title: 'Execution, Validation & Scaling',
    description: 'Generate migration tasks, handle unexpected discoveries, validate behavior parity, and scale the process across a migration programme.',
    moduleIds: ['m-module-5', 'm-module-6'],
  },
];

const migrationModules: Module[] = [
  ...migrationDay1Modules,
  ...migrationDay2Modules,
  ...migrationDay3Modules,
];

/* ----- Courses ----- */

export const courses: Course[] = [
  {
    id: 'foundations',
    title: 'SDD Foundations',
    subtitle: 'Spec-Driven Development for Architects',
    description: 'A 3-day training program covering the full SDD pipeline — from constitution to implementation. Learn to drive software development through structured specifications.',
    days: foundationsDays,
    modules: foundationsModules,
  },
  {
    id: 'migration',
    title: 'SDD Cloud Migration',
    subtitle: 'Spec-Driven Cloud Migration for Architects',
    description: 'A 3-day training program for migration architects. Use the SDD pipeline to reverse-engineer legacy systems, specify cloud targets, and drive structured migrations.',
    days: migrationDays,
    modules: migrationModules,
  },
];

/* ----- Lookups ----- */

export function getCourseById(courseId: string): Course | undefined {
  return courses.find((c) => c.id === courseId);
}

export function getDayById(dayId: string): Day | undefined {
  for (const course of courses) {
    const day = course.days.find((d) => d.id === dayId);
    if (day) return day;
  }
  return undefined;
}

export function getModuleById(moduleId: string): Module | undefined {
  for (const course of courses) {
    const mod = course.modules.find((m) => m.id === moduleId);
    if (mod) return mod;
  }
  return undefined;
}

export function getModulesForDay(dayId: string): Module[] {
  for (const course of courses) {
    const day = course.days.find((d) => d.id === dayId);
    if (day) return course.modules.filter((m) => day.moduleIds.includes(m.id));
  }
  return [];
}

export function getLessonById(lessonId: string): Lesson | undefined {
  for (const course of courses) {
    for (const mod of course.modules) {
      const lesson = mod.lessons.find((l) => l.id === lessonId);
      if (lesson) return lesson;
    }
  }
  return undefined;
}

export function getAdjacentLessons(courseId: string, lessonId: string): { prev: Lesson | null; next: Lesson | null } {
  const course = getCourseById(courseId);
  if (!course) return { prev: null, next: null };
  const allLessons = course.modules.flatMap((m) => m.lessons);
  const idx = allLessons.findIndex((l) => l.id === lessonId);
  return {
    prev: idx > 0 ? allLessons[idx - 1]! : null,
    next: idx < allLessons.length - 1 ? allLessons[idx + 1]! : null,
  };
}

export function getModuleForLesson(lessonId: string): Module | undefined {
  for (const course of courses) {
    const mod = course.modules.find((m) => m.lessons.some((l) => l.id === lessonId));
    if (mod) return mod;
  }
  return undefined;
}

export function getCourseForModule(moduleId: string): Course | undefined {
  return courses.find((c) => c.modules.some((m) => m.id === moduleId));
}

export function getCourseForLesson(lessonId: string): Course | undefined {
  return courses.find((c) => c.modules.some((m) => m.lessons.some((l) => l.id === lessonId)));
}

export function totalLessonsForCourse(courseId: string): number {
  const course = getCourseById(courseId);
  if (!course) return 0;
  return course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
}
