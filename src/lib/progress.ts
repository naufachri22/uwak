export type ProgressState = {
  completedLessons: string[];
  bestQuizScore: number;
  quizAttempts: number;
};

const KEY = "maharah-kalam-progress";

export const defaultProgress: ProgressState = {
  completedLessons: [],
  bestQuizScore: 0,
  quizAttempts: 0
};

export function readProgress(): ProgressState {
  if (typeof window === "undefined") return defaultProgress;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw) as Partial<ProgressState>;
    return {
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      bestQuizScore: typeof parsed.bestQuizScore === "number" ? parsed.bestQuizScore : 0,
      quizAttempts: typeof parsed.quizAttempts === "number" ? parsed.quizAttempts : 0
    };
  } catch {
    return defaultProgress;
  }
}

export function writeProgress(progress: ProgressState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(progress));
}

export function markLessonComplete(id: string) {
  const current = readProgress();
  if (!current.completedLessons.includes(id)) {
    current.completedLessons.push(id);
    writeProgress(current);
  }
  return current;
}

export function saveQuizResult(score: number) {
  const current = readProgress();
  current.quizAttempts += 1;
  current.bestQuizScore = Math.max(current.bestQuizScore, score);
  writeProgress(current);
  return current;
}
