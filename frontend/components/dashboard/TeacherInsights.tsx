import React from "react";

const TeacherInsights: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">
        Teacher Insights
      </h2>

      <ul className="space-y-2 text-gray-700">
        <li>• 5 students need support in Fractions</li>
        <li>• Algebra mastery improved by 18%</li>
        <li>• Engagement streak highest on Tuesdays</li>
      </ul>
    </div>
  );
};

export default TeacherInsights;
