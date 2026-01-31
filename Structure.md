MindSpark/
├── README.md                  # Full detailed README (already prepared)
├── LICENSE                    # MIT License
├── .gitignore                 # Standard .gitignore for Python, Node, Flutter
├── docs/
│   ├── proposal.pdf           # Hackathon Project Proposal
│   ├── slides.pdf             # Slide deck for judges
│   └── user_guide.md          # Step-by-step guide for using MindSpark
├── frontend/
│   ├── react-web/             # ReactJS Web Application
│   │   ├── public/            # index.html, favicon, static images
│   │   ├── src/
│   │   │   ├── components/    # Navbar, LessonCard, QuizCard, Dashboard
│   │   │   ├── pages/         # Home, Lessons, Profile, Analytics
│   │   │   ├── utils/         # Helper functions, API calls
│   │   │   └── App.js         # Main React app
│   │   └── package.json       # React dependencies & scripts
│   └── flutter-mobile/        # Flutter Mobile App
│       ├── lib/
│       │   ├── screens/      # HomeScreen, LessonScreen, QuizScreen, ProfileScreen
│       │   ├── widgets/      # Reusable widgets like buttons, cards
│       │   └── main.dart     # Main entry point
│       └── pubspec.yaml      # Flutter dependencies
├── backend/
│   ├── app/
│   │   ├── main.py            # FastAPI entrypoint
│   │   ├── models.py          # Database models (students, lessons, progress)
│   │   ├── routes/            # API routes (lessons.py, quizzes.py, users.py)
│   │   └── utils.py           # Helper functions (AI feedback, adaptive learning)
│   ├── requirements.txt       # Python dependencies
│   └── database.db            # SQLite database file with sample data
├── ai/
│   ├── adaptive_learning/     # Adaptive learning AI models
│   │   ├── model.py           # TensorFlow Lite model code
│   │   └── training_data.csv  # Sample training dataset
│   └── ai_utils.py            # Scripts for AI predictions, feedback, and scoring
├── assets/
│   ├── thumbnails/            # Hackathon thumbnail (3:2 ratio)
│   │   └── mindspark_thumb.png
│   ├── screenshots/           # Screenshots of web and mobile app
│   │   ├── web_home.png
│   │   ├── mobile_quiz.png
│   │   └── dashboard.png
│   └── videos/                # Demo video files
│       └── demo.mp4
├── tests/
│   ├── frontend_tests/        # Unit tests for React/Flutter components
│   │   └── test_dashboard.js
│   ├── backend_tests/         # API tests for FastAPI routes
│   │   └── test_quizzes.py
│   └── ai_tests/              # Unit tests for AI prediction and scoring
│       └── test_model.py
