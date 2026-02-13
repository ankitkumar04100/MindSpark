import React, { createContext, useContext, useState } from "react";

interface LearningMetrics {
  accuracy: number;
  engagement: number;
  mastery: number;
}

interface LearningContextType {
  metrics: LearningMetrics;
  updatePerformance: (correct: boolean) => void;
  resetLearning: () => void;
}

const LearningContext = createContext<LearningContextType | undefined>(
  undefined
);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [attempts, setAttempts] = useState<number[]>([]);

  const calculateMetrics = (data: number[]): LearningMetrics => {
    const total = data.length;
    const correct = data.reduce((a, b) => a + b, 0);

    const accuracy = total === 0 ? 0 : (correct / total) * 100;
    const mastery = accuracy;
    const engagement = Math.min(100, total * 10);

    return {
      accuracy: Math.round(accuracy),
      mastery: Math.round(mastery),
      engagement: Math.round(engagement),
    };
  };

  const updatePerformance = (correct: boolean) => {
    setAttempts((prev) => [...prev, correct ? 1 : 0]);
  };

  const resetLearning = () => {
    setAttempts([]);
  };

  const metrics = calculateMetrics(attempts);

  return (
    <LearningContext.Provider
      value={{ metrics, updatePerformance, resetLearning }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error("useLearning must be used within LearningProvider");
  }
  return context;
};
