import React from "react";

export default function QuizCard({ question }) {
  return (
    <div style={{ margin: 10 }}>
      <strong>{question}</strong>
    </div>
  );
}
