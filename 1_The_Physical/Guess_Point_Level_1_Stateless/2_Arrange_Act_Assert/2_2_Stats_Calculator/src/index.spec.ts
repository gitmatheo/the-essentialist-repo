import { StatsCalculator } from "./index";

describe("Stats Calculator", () => {
  let calculator: StatsCalculator;

  beforeEach(() => {
    calculator = new StatsCalculator();
  });

  test("should throw error if sequence is not an array", () => {
    const invalidInputs = [{}, "a", 1, true, null, undefined];

    invalidInputs.forEach((sequence: any) => {
      expect(() => calculator.calculate(sequence)).toThrowError(
        "Sequence is not an array"
      );
    });
  });

  test("should throw error if sequence is empty", () => {
    const sequence = [] as any[];
    expect(() => calculator.calculate(sequence)).toThrowError(
      "Sequence is empty"
    );
  });

  test("should throw error if sequence contains non-numbers", () => {
    const sequence = [2, 4, -8, 40, "a", undefined, null, [], {}] as any[];
    expect(() => calculator.calculate(sequence)).toThrowError(
      "Sequence contains non-numbers"
    );
  });

  test("should calculate minimum value", () => {
    const sequence = [2, 4, 21, -8, 53, 40];
    const result = calculator.calculate(sequence);
    expect(result.min).toBe(-8);
  });

  test("should calculate maximum value", () => {
    const sequence = [2, 4, 21, -8, 53, 40];
    const result = calculator.calculate(sequence);
    expect(result.max).toBe(53);
  });

  test("should calculate number of elements in the sequence", () => {
    const sequence = [2, 4, 21, -8, 53, 40];
    const result = calculator.calculate(sequence);
    expect(result.count).toBe(6);
  });

  test("should calculate average value", () => {
    const sequence = [2, 4, 21, -8, 53, 40];
    const result = calculator.calculate(sequence);
    expect(result.avg).toBe(18.666666666667);
  });

  test("should calculate all stats", () => {
    const sequence = [2, 4, 21, -8, 53, 40];
    expect(calculator.calculate(sequence)).toEqual({
      min: -8,
      max: 53,
      count: 6,
      avg: 18.666666666667,
    });
  });
});
