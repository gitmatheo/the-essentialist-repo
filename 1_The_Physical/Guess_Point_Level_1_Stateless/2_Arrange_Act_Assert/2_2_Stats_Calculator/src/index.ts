interface Stats {
  min: number;
  max: number;
  count: number;
  avg: number;
}

export class StatsCalculator {
  calculate(sequence: number[]): Stats {
    this.validateSequenceInput(sequence);

    return {
      min: this.calculateMinimum(sequence),
      max: this.calculateMaximum(sequence),
      count: this.calculateNumberOfElements(sequence),
      avg: this.calculateAverage(sequence),
    };
  }

  private validateSequenceInput(sequence: number[]): void {
    if (!Array.isArray(sequence)) {
      throw new Error("Sequence is not an array");
    }

    if (sequence.some((element) => typeof element !== "number")) {
      throw new Error("Sequence contains non-numbers");
    }

    if (sequence.length === 0) {
      throw new Error("Sequence is empty");
    }
  }

  private calculateMinimum(sequence: number[]): number {
    return sequence.sort((a, b) => a - b)[0];
  }
  private calculateMaximum(sequence: number[]): number {
    return sequence.sort((a, b) => a - b)[sequence.length - 1];
  }
  private calculateNumberOfElements(sequence: number[]): number {
    return sequence.length;
  }
  private calculateAverage(sequence: number[]): number {
    const sum = sequence.reduce((a, b) => a + b);
    const avg = sum / sequence.length;
    return Number(avg.toFixed(12));
  }
}
