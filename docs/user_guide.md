# MindSpark User Guide

## Getting Started
1. Clone the repo: `git clone https://github.com/YourUsername/MindSpark.git`
2. Backend setup:
   - Install dependencies: `pip install -r backend/requirements.txt`
   - Run FastAPI: `uvicorn backend.app.main:app --reload`
3. Frontend setup:
   - React Web: `cd frontend/react-web` → `npm install` → `npm start`
   - Flutter Mobile: `cd frontend/flutter-mobile` → `flutter pub get` → `flutter run`
4. Demo database: `backend/database.db` included for sample data.

## Features
- Adaptive Lessons & Quizzes
- AI Feedback
- Gamified Learning
- Accessibility Tools (TTS, Dyslexia-friendly font, Sign Language Avatar)
- Teacher Dashboard

## Teacher Dashboard
- Monitor student progress
- Identify learning gaps
- Assign targeted exercises
