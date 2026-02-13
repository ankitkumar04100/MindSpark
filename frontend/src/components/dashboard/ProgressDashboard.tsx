import React from "react";
import AnalyticsPanel from "./AnalyticsPanel";

const ProgressDashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Student Progress</h2>
      <AnalyticsPanel />
    </div>
  );
};

export default ProgressDashboard;
