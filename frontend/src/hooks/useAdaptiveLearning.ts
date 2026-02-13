import { useState, useEffect, useCallback } from "react";

export interface Question {
  id: string;
  difficulty: number; // 1–10
  topic: string;
}

interface AdaptiveState {
  currentLevel: number;
  streak: number;
  accuracy: number;
}

export const useAdaptiveLearning = () => {
  const [state, setState] = useState<AdaptiveState>({
    currentLevel: 5,
    streak: 0,
    accuracy: 0,
  });

  const [history, setHistory] = useState<boolean[]>([]);

  // Update mastery logic
  const submitAnswer = useCallback((isCorrect: boolean) => {
    setHistory(prev => [...prev, isCorrect]);

    setState(prev => {
      const newStreak = isCorrect ? prev.streak + 1 : 0;

      const accuracy =
        (history.filter(Boolean).length + (isCorrect ? 1 : 0)) /
        (history.length + 1);

      let newLevel = prev.currentLevel;

      if (newStreak >= 3) newLevel = Math.min(prev.currentLevel + 1, 10);
      if (!isCorrect) newLevel = Math.max(prev.currentLevel - 1, 1);

      return {
        currentLevel: newLevel,
        streak: newStreak,
        accuracy,
      };
    });
  }, [history]);

  const resetProgress = () => {
    setState({ currentLevel: 5, streak: 0, accuracy: 0 });
    setHistory([]);
  };

  return {
    ...state,
    submitAnswer,
    resetProgress,
  };
};
