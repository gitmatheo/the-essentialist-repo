import { isValidPassword } from "./index";

describe("password validator", () => {
  it("should return PasswordValidationResult on valid password", () => {
    const validPassword = "Password1";
    const result = isValidPassword(validPassword);
    expect(result).toEqual({
      isValid: true,
      errors: [],
    });
  });

  it("should return false if password is not between 5 and 15 characters long", () => {
    const invalidPasswords = ["Super-long-Password-over-15-characters", "sHo1"];

    invalidPasswords.forEach((invalidPassword) => {
      const result = isValidPassword(invalidPassword);
      expect(result.isValid).toBe(false);
      expect(result.errors).toContain(
        "Password must be between 5 and 15 characters long."
      );
    });
  });

  it("should return false if password does not contain at least one digit", () => {
    const invalidPassword = "WithoutDigit";

    const result = isValidPassword(invalidPassword);

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain(
      "Password must contain at least one digit."
    );
  });

  it("should return false if password does not contain at least one upper case letter", () => {
    const invalidPassword = "no1uppercase";

    const result = isValidPassword(invalidPassword);

    expect(result.isValid).toBe(false);
    expect(result.errors).toContain(
      "Password must contain at least one uppercase letter."
    );
  });

  it("should contain all error messages", () => {
    const errorMessages = [
      "Password must be between 5 and 15 characters long.",
      "Password must contain at least one digit.",
      "Password must contain at least one uppercase letter.",
    ];
    const invalidPassword = "n";

    const result = isValidPassword(invalidPassword);

    expect(result.isValid).toBe(false);
    errorMessages.forEach((errorMessage) => {
      expect(result.errors).toContain(errorMessage);
    });
  });
});
