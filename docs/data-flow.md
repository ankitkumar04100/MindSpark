# MindSpark Data Flow

## 1. Student Interaction Flow

1. Student attempts question
2. System captures:
   - Accuracy
   - Response time
   - Hint usage
   - Retry frequency
3. Feature extraction module processes inputs
4. Adaptive model predicts mastery probability
5. Decision engine adjusts difficulty
6. Feedback module generates explanation
7. Dashboard updates analytics in real-time

---

## 2. Teacher Analytics Flow

Student Data → Aggregation Engine → Trend Analysis → Weakness Detection → Teacher Dashboard Insights

---

## 3. Feature Engineering Inputs

- Historical accuracy rate
- Time variance trend
- Retention decay score
- Engagement streak
- Topic-wise mastery confidence

---

## 4. Privacy & Security

- No raw personal data stored in model inputs
- Tokenized student identifiers
- Encrypted communication (HTTPS)
- Role-based access control
