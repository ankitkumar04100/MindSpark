// ================================
// ✅ Validation Utilities
// ================================

export interface ValidationResult {
  valid: boolean;
  message?: string;
}

export const validateEmail = (email: string): ValidationResult => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    return { valid: false, message: "Email is required" };
  }

  if (!regex.test(email)) {
    return { valid: false, message: "Invalid email format" };
  }

  return { valid: true };
};

export const validatePassword = (
  password: string
): ValidationResult => {
  if (!password) {
    return { valid: false, message: "Password is required" };
  }

  if (password.length < 8) {
    return {
      valid: false,
      message: "Password must be at least 8 characters",
    };
  }

  const strongRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/;

  if (!strongRegex.test(password)) {
    return {
      valid: false,
      message:
        "Password must include uppercase, lowercase and number",
    };
  }

  return { valid: true };
};

export const validateRequired = (
  value: string,
  fieldName: string
): ValidationResult => {
  if (!value.trim()) {
    return {
      valid: false,
      message: `${fieldName} is required`,
    };
  }

  return { valid: true };
};
