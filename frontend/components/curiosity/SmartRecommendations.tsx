import React from "react";

const topics = [
  "Advanced Fractions Challenge",
  "Real-world Algebra Applications",
  "Gamified Geometry Quiz",
  "Interactive Science Simulation"
];

const SmartRecommendations: React.FC = () => {
  return (
    <div className="grid gap-3">
      {topics.map((topic, index) => (
        <div
          key={index}
          className="p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition"
        >
          {topic}
        </div>
      ))}
    </div>
  );
};

export default SmartRecommendations;
