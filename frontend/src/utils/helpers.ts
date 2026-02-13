// ================================
// 🔧 General Utility Helpers
// ================================

/**
 * Format seconds into mm:ss
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${mins.toString().padStart(2, "0")}:${secs
    .toString()
    .padStart(2, "0")}`;
};

/**
 * Calculate percentage safely
 */
export const calculatePercentage = (
  value: number,
  total: number
): number => {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
};

/**
 * Debounce function (performance optimization)
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  delay: number
) => {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

/**
 * Generate unique ID
 */
export const generateId = (prefix = "id"): string => {
  return `${prefix}_${Math.random().toString(36).substring(2, 9)}_${Date.now()}`;
};

/**
 * Role checker
 */
export const hasRole = (
  userRole: string,
  allowedRoles: string[]
): boolean => {
  return allowedRoles.includes(userRole);
};
