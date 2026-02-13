import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
      © {new Date().getFullYear()} MindSpark. All rights reserved.
    </footer>
  );
};

export default Footer;
