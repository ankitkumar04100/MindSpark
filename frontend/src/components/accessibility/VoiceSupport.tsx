import React from "react";

const VoiceSupport: React.FC = () => {
  const speak = () => {
    const msg = new SpeechSynthesisUtterance(
      "Welcome to MindSpark. Your learning journey begins now."
    );
    window.speechSynthesis.speak(msg);
  };

  return (
    <button
      onClick={speak}
      className="px-4 py-2 bg-purple-600 text-white rounded-lg"
    >
      🔊 Voice Introduction
    </button>
  );
};

export default VoiceSupport;
