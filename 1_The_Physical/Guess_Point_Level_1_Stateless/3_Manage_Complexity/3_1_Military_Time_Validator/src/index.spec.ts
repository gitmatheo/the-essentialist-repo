import { MilitaryTimeRangeValidator } from "./index";

describe("Military time range validator", () => {
  const validator = new MilitaryTimeRangeValidator();

  it("should return true for valid military time ranges", () => {
    const validMilitaryTimeRanges = [
      "00:00 - 00:00",
      "00:00 - 00:01",
      "00:00 - 01:00",
      "00:00 - 01:01",
      "01:12 - 14:32",
      "22:00 - 23:12",
      "00:00 - 23:59",
      "12:00 - 12:00",
    ];

    validMilitaryTimeRanges.forEach((timeRange) => {
      expect(validator.isValid(timeRange)).toBe(true);
    });
  });

  it("Invalid military time range should return false", () => {
    const invalidMilitaryTimeRanges = [
      "25:00 - 12:23",
      "12:00 - 25:00",
      "12:60 - 13:00",
      "12:00 - 12:",
      "12:00 - 12",
      "12 - 12:00",
      "12:00 -",
      "- 12:00",
      "12:00 - 12:00:",
      "12:00: - 12:00",
    ];
    invalidMilitaryTimeRanges.forEach((timeRange) => {
      expect(validator.isValid(timeRange)).toBe(false);
    });
  });
});
