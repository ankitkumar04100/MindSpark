import { useEffect } from "react";
import Navbar from "../components/common/Navbar";
import { analyticsService } from "../services/analyticsService";

const AdminPanel = () => {
  useEffect(() => {
    analyticsService.trackPageView("admin_panel");
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Control Center</h1>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="font-semibold mb-2">User Management</h2>
            <p className="text-sm text-gray-600">
              View, suspend, or manage users.
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="font-semibold mb-2">System Analytics</h2>
            <p className="text-sm text-gray-600">
              Platform-wide performance metrics.
            </p>
          </div>

          <div className="bg-white shadow p-6 rounded-lg">
            <h2 className="font-semibold mb-2">AI Monitoring</h2>
            <p className="text-sm text-gray-600">
              Review adaptive model decisions.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
