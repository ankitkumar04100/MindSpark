import React from "react";
import LessonCard from "../components/LessonCard";

export default function Lessons() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Lessons</h2>
      <LessonCard title="Introduction to AI" difficulty="Beginner" />
      <LessonCard title="Machine Learning Basics" difficulty="Intermediate" />
    </div>
  );
}
