import React from "react";
import SmartRecommendations from "./SmartRecommendations";

const CuriosityEngine: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
      <h2 className="text-2xl font-semibold">
        Curiosity Engine
      </h2>
      <p className="text-gray-600">
        Personalized exploration suggestions based on learning behavior.
      </p>

      <SmartRecommendations />
    </div>
  );
};

export default CuriosityEngine;
