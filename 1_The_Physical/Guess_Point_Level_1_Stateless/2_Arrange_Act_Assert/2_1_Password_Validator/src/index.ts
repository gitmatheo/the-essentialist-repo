export interface PasswordValidationResult {
  isValid: boolean;
  errors: string[];
}

export function isValidPassword(password: string): PasswordValidationResult {
  const errors: string[] = [];

  const isBetween5And15CharactersLong =
    password.length >= 5 && password.length <= 15;
  const containsAtLeastOneDigit = /\d/.test(password);
  const containsAtLeastOneUpperCaseLetter = /[A-Z]/.test(password);

  if (!isBetween5And15CharactersLong) {
    errors.push("Password must be between 5 and 15 characters long.");
  }

  if (!containsAtLeastOneDigit) {
    errors.push("Password must contain at least one digit.");
  }

  if (!containsAtLeastOneUpperCaseLetter) {
    errors.push("Password must contain at least one uppercase letter.");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}
