import React, { useState } from "react";
import DifficultyEngine from "./DifficultyEngine";
import MasteryTracker from "./MasteryTracker";

const AdaptiveLearning: React.FC = () => {
  const [score, setScore] = useState<number[]>([]);
  const [difficulty, setDifficulty] = useState<"Easy" | "Medium" | "Hard">("Medium");

  const handleAnswer = (correct: boolean) => {
    const updated = [...score, correct ? 1 : 0];
    setScore(updated);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-semibold">Adaptive Learning Session</h2>

      <DifficultyEngine scores={score} onDifficultyChange={setDifficulty} />

      <div className="p-4 bg-gray-100 rounded-xl">
        <p className="mb-4">
          Current Difficulty: <strong>{difficulty}</strong>
        </p>

        <button
          onClick={() => handleAnswer(true)}
          className="mr-3 px-4 py-2 bg-green-500 text-white rounded-lg"
        >
          Simulate Correct
        </button>

        <button
          onClick={() => handleAnswer(false)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          Simulate Wrong
        </button>
      </div>

      <MasteryTracker scores={score} />
    </div>
  );
};

export default AdaptiveLearning;
