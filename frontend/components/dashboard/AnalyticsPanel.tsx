import React from "react";

const AnalyticsPanel: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md grid grid-cols-3 gap-6">
      <div>
        <h3 className="text-sm text-gray-500">Accuracy</h3>
        <p className="text-2xl font-bold">82%</p>
      </div>
      <div>
        <h3 className="text-sm text-gray-500">Engagement</h3>
        <p className="text-2xl font-bold">41% ↑</p>
      </div>
      <div>
        <h3 className="text-sm text-gray-500">Mastery Growth</h3>
        <p className="text-2xl font-bold">+27%</p>
      </div>
    </div>
  );
};

export default AnalyticsPanel;
