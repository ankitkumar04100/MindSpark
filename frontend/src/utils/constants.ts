// ================================
// 🌍 App Configuration Constants
// ================================

export const APP_NAME = "AdaptiveAI Learning";

export const API_ENDPOINTS = {
  AUTH: "/auth",
  AI_ADAPTIVE: "/ai/adaptive",
  AI_HINTS: "/ai/hints",
  ANALYTICS_BATCH: "/analytics/batch",
};

export const USER_ROLES = {
  STUDENT: "student",
  TEACHER: "teacher",
  ADMIN: "admin",
} as const;

export const DIFFICULTY_LEVEL = {
  MIN: 1,
  MAX: 10,
  DEFAULT: 5,
};

export const ANALYTICS_EVENTS = {
  PAGE_VIEW: "page_view",
  LEARNING_PROGRESS: "learning_progress",
  ANSWER_SUBMITTED: "answer_submitted",
};

export const STORAGE_KEYS = {
  AUTH_TOKEN: "auth_token",
  USER_DATA: "user_data",
  THEME: "app_theme",
};

export const THEME_MODES = {
  LIGHT: "light",
  DARK: "dark",
};
