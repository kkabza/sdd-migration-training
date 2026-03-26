import { useEffect, useRef, useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { getLessonById, getModuleForLesson, getDayById, getAdjacentLessons } from '@/data/trainingContent';
import { Breadcrumb } from '@/components/Breadcrumb/Breadcrumb';
import { ContentRenderer } from '@/components/ContentRenderer/ContentRenderer';
import { LessonQuiz } from '@/components/LessonQuiz/LessonQuiz';
import type { LessonQuizHandle } from '@/components/LessonQuiz/LessonQuiz';
import { useProgress } from '@/hooks/useProgress';
import type { QuizQuestion } from '@/types';
import styles from './Lesson.module.css';

export function LessonPage() {
  const { courseId, dayId, moduleId, lessonId } = useParams();
  const { isLessonComplete, toggleLessonComplete, setLastVisitedLesson } = useProgress();
  const quizRef = useRef<LessonQuizHandle>(null);

  const lesson = lessonId ? getLessonById(lessonId) : undefined;
  const mod = lessonId ? getModuleForLesson(lessonId) : undefined;
  const day = dayId ? getDayById(dayId) : undefined;
  const adjacent = (courseId && lessonId) ? getAdjacentLessons(courseId, lessonId) : { prev: null, next: null };
  const lastModuleLesson = mod && mod.lessons.length > 0 ? mod.lessons[mod.lessons.length - 1] : undefined;

  // Only show quiz on the last lesson of a module, pooling questions from all lessons
  const isLastInModule = lesson !== undefined && lastModuleLesson?.id === lesson.id;
  const moduleQuizPool = useMemo<QuizQuestion[]>(() => {
    if (!isLastInModule || !mod) return [];
    return mod.lessons.flatMap(l => l.quiz ?? []);
  }, [isLastInModule, mod]);

  useEffect(() => {
    if (lessonId) setLastVisitedLesson(lessonId);
  }, [lessonId, setLastVisitedLesson]);

  if (!lesson || !mod || !day) return <Navigate to="/404" replace />;

  const completed = isLessonComplete(lesson.id);
  const prevMod = adjacent.prev ? getModuleForLesson(adjacent.prev.id) : null;
  const prevDay = prevMod ? getDayById(prevMod.dayId) : null;
  const nextMod = adjacent.next ? getModuleForLesson(adjacent.next.id) : null;
  const nextDay = nextMod ? getDayById(nextMod.dayId) : null;

  return (
    <div className={styles.page}>
      <Breadcrumb items={[
        { label: 'Home', to: `/course/${courseId}` },
        { label: `Day ${day.number}: ${day.title}` },
        { label: `Module ${mod.number}: ${mod.title}`, to: `/course/${courseId}/day/${dayId}/module/${moduleId}` },
        { label: `Lesson ${lesson.number}: ${lesson.title}` },
      ]} />

      <div className={styles.header}>
        <h1 className={styles.title}>{lesson.title}</h1>
        <span className={styles.duration}>{lesson.duration}</span>
      </div>

      <ContentRenderer blocks={lesson.content} />

      {isLastInModule && moduleQuizPool.length > 0 && (
        <LessonQuiz ref={quizRef} questions={moduleQuizPool} maxQuestions={5} />
      )}

      <div className={styles.footer}>
        {adjacent.prev && prevMod && prevDay ? (
          <Link
            to={`/course/${courseId}/day/${prevDay.id}/module/${prevMod.id}/lesson/${adjacent.prev.id}`}
            className={styles.navBtn}
          >
            <ArrowLeft size={16} /> Previous
          </Link>
        ) : <div />}

        <button
          className={`${styles.completeBtn} ${completed ? styles.completedBtn : ''}`}
          onClick={() => toggleLessonComplete(lesson.id)}
        >
          <CheckCircle2 size={16} />
          {completed ? 'Completed' : 'Mark as Complete'}
        </button>

        {adjacent.next && nextMod && nextDay ? (
          <Link
            to={`/course/${courseId}/day/${nextDay.id}/module/${nextMod.id}/lesson/${adjacent.next.id}`}
            className={styles.navBtn}
            onClick={() => quizRef.current?.revealAll()}
          >
            Next <ArrowRight size={16} />
          </Link>
        ) : (
          <div className={styles.finishBanner}>
            <div className={styles.finishTitle}>Course Complete!</div>
            <div className={styles.finishText}>
              You've reached the end of this course. <Link to="/">Return to course catalog</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
