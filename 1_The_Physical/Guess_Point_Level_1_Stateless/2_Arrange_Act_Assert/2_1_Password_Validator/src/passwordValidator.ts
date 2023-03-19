import { PasswordValidationResult } from "./passwordValidator.interface";

export class PasswordValidator {
  validate(password: string): PasswordValidationResult {
    const errors: string[] = [];

    if (!this.isBetween5And15CharactersLong(password)) {
      errors.push("Password must be between 5 and 15 characters long.");
    }

    if (!this.containsAtLeastOneDigit(password)) {
      errors.push("Password must contain at least one digit.");
    }

    if (!this.containsAtLeastOneUpperCaseLetter(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  private isBetween5And15CharactersLong(password: string): boolean {
    return password.length >= 5 && password.length <= 15;
  }

  private containsAtLeastOneDigit(password: string): boolean {
    return /\d/.test(password);
  }

  private containsAtLeastOneUpperCaseLetter(password: string): boolean {
    return /[A-Z]/.test(password);
  }
}
