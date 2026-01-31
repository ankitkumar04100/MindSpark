const API_URL = "http://127.0.0.1:8000";

export const fetchLessons = async () => {
  const res = await fetch(`${API_URL}/lessons`);
  return res.json();
};
