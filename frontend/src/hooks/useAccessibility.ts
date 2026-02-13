import { useState, useEffect } from "react";

export const useAccessibility = () => {
  const [highContrast, setHighContrast] = useState(false);
  const [textToSpeechEnabled, setTextToSpeechEnabled] = useState(false);
  const [fontSize, setFontSize] = useState<"small" | "medium" | "large">(
    "medium"
  );

  useEffect(() => {
    document.body.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  useEffect(() => {
    document.body.style.fontSize =
      fontSize === "small"
        ? "14px"
        : fontSize === "large"
        ? "20px"
        : "16px";
  }, [fontSize]);

  const speak = (text: string) => {
    if (!textToSpeechEnabled) return;

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return {
    highContrast,
    setHighContrast,
    textToSpeechEnabled,
    setTextToSpeechEnabled,
    fontSize,
    setFontSize,
    speak,
  };
};
