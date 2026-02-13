import { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import TeacherInsights from "../components/dashboard/TeacherInsights";
import AnalyticsPanel from "../components/dashboard/AnalyticsPanel";
import { analyticsService } from "../services/analyticsService";

const TeacherDashboard = () => {
  useEffect(() => {
    analyticsService.trackPageView("teacher_dashboard");
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 space-y-6">
        <h1 className="text-3xl font-bold">Teacher Insights</h1>

        <TeacherInsights />

        <AnalyticsPanel />
      </div>
    </>
  );
};

export default TeacherDashboard;
