import { useEffect } from "react";
import { analyticsService } from "../services/analyticsService";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

const Home = () => {
  useEffect(() => {
    analyticsService.trackPageView("home");
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-bold mb-4">
          AI-Powered Adaptive Learning Platform
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl mb-8">
          Personalized learning paths, real-time analytics, and inclusive
          education powered by intelligent AI systems.
        </p>

        <div className="flex gap-4">
          <a
            href="/student"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Student Dashboard
          </a>

          <a
            href="/teacher"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-black transition"
          >
            Teacher Portal
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Home;
