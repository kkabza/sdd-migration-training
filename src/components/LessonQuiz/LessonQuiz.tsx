import { useState, useCallback, useMemo, useImperativeHandle, forwardRef } from 'react';
import type { QuizQuestion } from '@/types';
import styles from './LessonQuiz.module.css';

export interface LessonQuizHandle {
  revealAll: () => void;
}

interface Props {
  questions: QuizQuestion[];
  maxQuestions?: number;
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const LessonQuiz = forwardRef<LessonQuizHandle, Props>(
  function LessonQuiz({ questions, maxQuestions }, ref) {
    const shuffled = useMemo(() => {
      const all = shuffle(questions);
      return maxQuestions ? all.slice(0, maxQuestions) : all;
    }, [questions, maxQuestions]);

    const [answers, setAnswers] = useState<Record<number, number>>({});
    const [revealed, setRevealed] = useState<Record<number, boolean>>({});
    const [skipped, setSkipped] = useState(false);

    const revealAll = useCallback(() => {
      const allRevealed: Record<number, boolean> = {};
      shuffled.forEach((_, qi) => { allRevealed[qi] = true; });
      setRevealed(allRevealed);
      setSkipped(true);
    }, [shuffled]);

    useImperativeHandle(ref, () => ({ revealAll }), [revealAll]);

    const select = useCallback((qi: number, oi: number) => {
      if (revealed[qi]) return;
      setAnswers(prev => ({ ...prev, [qi]: oi }));
    }, [revealed]);

    const check = useCallback((qi: number) => {
      setRevealed(prev => ({ ...prev, [qi]: true }));
    }, []);

    const answeredCount = Object.keys(revealed).length;
    const correctCount = Object.entries(revealed).filter(
      ([qi]) => answers[Number(qi)] === shuffled[Number(qi)].correctIndex,
    ).length;
    const allDone = answeredCount === shuffled.length;

    return (
      <section className={styles.quiz}>
        <div className={styles.quizHeader}>
          <div>
            <h2 className={styles.heading}>Knowledge Check</h2>
            <p className={styles.intro}>
              Test your understanding with {shuffled.length} quick questions.
            </p>
          </div>
          {!allDone && (
            <button className={styles.skipBtn} onClick={revealAll}>
              Skip Quiz
            </button>
          )}
        </div>

        {shuffled.map((q, qi) => {
          const selected = answers[qi];
          const isRevealed = revealed[qi];
          const isCorrect = isRevealed && selected === q.correctIndex;
          const isWrong = isRevealed && selected !== undefined && selected !== q.correctIndex;
          const isUnanswered = isRevealed && selected === undefined;

          return (
            <div key={qi} className={styles.question}>
              <p className={styles.qText}>
                <span className={styles.qNum}>{qi + 1}.</span> {q.question}
              </p>
              <div className={styles.options}>
                {q.options.map((opt, oi) => {
                  let cls = styles.option;
                  if (isRevealed && oi === q.correctIndex) cls += ` ${styles.correct}`;
                  else if (isRevealed && oi === selected && oi !== q.correctIndex) cls += ` ${styles.wrong}`;
                  else if (!isRevealed && oi === selected) cls += ` ${styles.selected}`;

                  return (
                    <button
                      key={oi}
                      className={cls}
                      onClick={() => select(qi, oi)}
                      disabled={isRevealed}
                    >
                      <span className={styles.optLetter}>
                        {String.fromCharCode(65 + oi)}
                      </span>
                      {opt}
                    </button>
                  );
                })}
              </div>
              {!isRevealed && selected !== undefined && (
                <button className={styles.checkBtn} onClick={() => check(qi)}>
                  Check Answer
                </button>
              )}
              {isRevealed && (
                <div className={`${styles.feedback} ${isCorrect ? styles.feedbackCorrect : (isUnanswered ? styles.feedbackSkipped : styles.feedbackWrong)}`}>
                  <strong>{isCorrect ? '✓ Correct!' : isUnanswered ? '⊘ Skipped' : '✗ Not quite.'}</strong>{' '}
                  {(isWrong || isUnanswered) && (
                    <span>The answer is <strong>{String.fromCharCode(65 + q.correctIndex)}</strong>. </span>
                  )}
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}

        {allDone && (
          <div className={styles.summary}>
            {skipped
              ? 'Quiz skipped — review the correct answers above.'
              : <>You scored <strong>{correctCount}</strong> out of <strong>{shuffled.length}</strong>
                  {correctCount === shuffled.length ? ' — perfect!' : '. Review any missed topics above.'}</>}
          </div>
        )}
      </section>
    );
  },
);
