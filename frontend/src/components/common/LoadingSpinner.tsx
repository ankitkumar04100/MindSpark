import React from "react";

const LoadingSpinner: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      role="status"
      aria-live="polite"
    >
      <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
      <p className="mt-4 text-sm text-gray-500">
        Loading adaptive experience...
      </p>
    </div>
  );
};

export default LoadingSpinner;
