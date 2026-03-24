import { useCallback, useMemo } from 'react';
import { useLocalStorage } from './useLocalStorage';
import type { Progress, Module, Course } from '@/types';

const STORAGE_KEY = 'sdd-training-platform-progress';
const defaultProgress: Progress = { completedLessons: {}, mediaPositions: {} };

export function useProgress() {
  const [progress, setProgress] = useLocalStorage<Progress>(STORAGE_KEY, defaultProgress);

  const markLessonComplete = useCallback(
    (lessonId: string) => { setProgress((prev) => ({
      ...prev, completedLessons: { ...prev.completedLessons, [lessonId]: true },
    })); }, [setProgress]);

  const toggleLessonComplete = useCallback(
    (lessonId: string) => { setProgress((prev) => {
      const next = { ...prev.completedLessons };
      if (next[lessonId]) delete next[lessonId]; else next[lessonId] = true;
      return { ...prev, completedLessons: next };
    }); }, [setProgress]);

  const isLessonComplete = useCallback(
    (lessonId: string) => !!progress.completedLessons[lessonId],
    [progress.completedLessons]);

  const getModuleProgress = useCallback(
    (module: Module) => {
      if (module.lessons.length === 0) return 0;
      const completed = module.lessons.filter((l) => progress.completedLessons[l.id]).length;
      return Math.round((completed / module.lessons.length) * 100);
    }, [progress.completedLessons]);

  const getCourseProgress = useCallback(
    (course: Course) => {
      const allLessons = course.modules.flatMap((m) => m.lessons);
      if (allLessons.length === 0) return 0;
      const completed = allLessons.filter((l) => progress.completedLessons[l.id]).length;
      return Math.round((completed / allLessons.length) * 100);
    }, [progress.completedLessons]);

  const setLastVisitedLesson = useCallback(
    (lessonId: string) => { setProgress((prev) => ({ ...prev, lastVisitedLesson: lessonId })); },
    [setProgress]);

  const overallProgress = useMemo(
    () => Object.keys(progress.completedLessons).length,
    [progress.completedLessons]);

  return {
    progress, markLessonComplete, toggleLessonComplete, isLessonComplete,
    getModuleProgress, getCourseProgress, setLastVisitedLesson, overallProgress,
    lastVisitedLesson: progress.lastVisitedLesson,
  };
}
