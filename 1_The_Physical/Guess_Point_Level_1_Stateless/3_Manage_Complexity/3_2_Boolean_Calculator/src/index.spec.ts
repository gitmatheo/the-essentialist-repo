import { booleanCalculator } from "./index";

describe("boolean calculator", () => {
  it("should handle single values", () => {
    expect(booleanCalculator("TRUE")).toBe(true);
    expect(booleanCalculator("FALSE")).toBe(false);
  });

  it("should handle NOT operator", () => {
    expect(booleanCalculator("NOT TRUE")).toBe(false);
    expect(booleanCalculator("NOT FALSE")).toBe(true);
  });

  it("should handle AND operator", () => {
    expect(booleanCalculator("TRUE AND FALSE")).toBe(false);
    expect(booleanCalculator("TRUE AND TRUE")).toBe(true);
  });

  it("should handle OR operator", () => {
    expect(booleanCalculator("TRUE OR FALSE")).toBe(true);
    expect(booleanCalculator("FALSE OR FALSE")).toBe(false);
  });

  it("should handle combination of operators w/ precedence in order NOT, AND, OR", () => {
    expect(booleanCalculator("TRUE OR TRUE OR TRUE AND FALSE")).toBe(true);
    expect(booleanCalculator("TRUE OR FALSE AND NOT FALSE")).toBe(true);
  });

  // it("should handle parenthesis", () => {
  //   expect(booleanCalculator("(TRUE OR TRUE OR TRUE) AND FALSE")).toBe(false);
  //   expect(booleanCalculator("NOT (TRUE AND TRUE)")).toBe(false);
  // });
});
