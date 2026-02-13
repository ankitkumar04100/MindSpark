import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-gray-100 border-t mt-12"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
        
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">
            MindSpark
          </h3>
          <p>
            Igniting Curiosity. Powering Learning.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2">
            Platform
          </h3>
          <ul className="space-y-1">
            <li>Adaptive Learning</li>
            <li>Curiosity Engine</li>
            <li>Teacher Analytics</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-2">
            Legal
          </h3>
          <ul className="space-y-1">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Accessibility</li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t text-xs text-gray-500">
        © {new Date().getFullYear()} MindSpark. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
