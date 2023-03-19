export class MilitaryTimeRangeValidator {
    isValid(timeRange: string): boolean {
        const timeRangeRegex = /^([01]\d|2[0-3]):([0-5]\d)\s*-\s*([01]\d|2[0-3]):([0-5]\d)$/;
        return timeRangeRegex.test(timeRange);
    }
}