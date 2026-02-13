import React, { useEffect } from "react";

interface Props {
  scores: number[];
  onDifficultyChange: (level: "Easy" | "Medium" | "Hard") => void;
}

const DifficultyEngine: React.FC<Props> = ({ scores, onDifficultyChange }) => {
  useEffect(() => {
    if (scores.length < 3) return;

    const accuracy =
      scores.reduce((a, b) => a + b, 0) / scores.length;

    if (accuracy > 0.8) onDifficultyChange("Hard");
    else if (accuracy < 0.5) onDifficultyChange("Easy");
    else onDifficultyChange("Medium");
  }, [scores]);

  return null;
};

export default DifficultyEngine;
