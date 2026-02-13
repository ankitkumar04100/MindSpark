import { useEffect } from "react";
import { analyticsService } from "../services/analyticsService";
import ProgressDashboard from "../components/dashboard/ProgressDashboard";
import AdaptiveLearning from "../components/adaptive/AdaptiveLearning";
import Navbar from "../components/common/Navbar";

const StudentDashboard = () => {
  useEffect(() => {
    analyticsService.trackPageView("student_dashboard");
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6 grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AdaptiveLearning />
        </div>

        <div>
          <ProgressDashboard />
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
