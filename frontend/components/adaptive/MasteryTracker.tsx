import React from "react";

interface Props {
  scores: number[];
}

const MasteryTracker: React.FC<Props> = ({ scores }) => {
  const mastery =
    scores.length === 0
      ? 0
      : Math.round(
          (scores.reduce((a, b) => a + b, 0) / scores.length) * 100
        );

  return (
    <div>
      <h3 className="font-semibold mb-2">Mastery Progress</h3>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-blue-600 h-4 rounded-full transition-all"
          style={{ width: `${mastery}%` }}
        />
      </div>
      <p className="mt-2 text-sm text-gray-600">
        Mastery Level: {mastery}%
      </p>
    </div>
  );
};

export default MasteryTracker;
