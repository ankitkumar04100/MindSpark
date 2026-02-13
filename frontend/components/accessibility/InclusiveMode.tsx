import React, { useState } from "react";

const InclusiveMode: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <label className="flex items-center space-x-3">
        <input
          type="checkbox"
          checked={enabled}
          onChange={() => setEnabled(!enabled)}
        />
        <span>Enable High Contrast Mode</span>
      </label>

      {enabled && (
        <p className="mt-2 text-sm text-gray-600">
          High contrast mode activated.
        </p>
      )}
    </div>
  );
};

export default InclusiveMode;
