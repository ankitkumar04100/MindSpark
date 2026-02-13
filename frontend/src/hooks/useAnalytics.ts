import { useEffect, useState } from "react";

interface SessionAnalytics {
  sessionTime: number;
  questionsAnswered: number;
  correctAnswers: number;
}

export const useAnalytics = () => {
  const [analytics, setAnalytics] = useState<SessionAnalytics>({
    sessionTime: 0,
    questionsAnswered: 0,
    correctAnswers: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalytics(prev => ({
        ...prev,
        sessionTime: prev.sessionTime + 1,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const trackAnswer = (isCorrect: boolean) => {
    setAnalytics(prev => ({
      sessionTime: prev.sessionTime,
      questionsAnswered: prev.questionsAnswered + 1,
      correctAnswers: isCorrect
        ? prev.correctAnswers + 1
        : prev.correctAnswers,
    }));
  };

  const getAccuracy = () =>
    analytics.questionsAnswered === 0
      ? 0
      : (analytics.correctAnswers / analytics.questionsAnswered) * 100;

  return {
    analytics,
    trackAnswer,
    getAccuracy,
  };
};
