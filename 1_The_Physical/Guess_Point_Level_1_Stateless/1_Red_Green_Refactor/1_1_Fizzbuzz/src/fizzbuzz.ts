export function fizzBuzz(n: number): string {
    if(typeof n !== "number") {
        throw new Error("Input must be a number");
    }
    if(n > 100 || n < 1) {
        throw new Error("Number must be between 1 and 100");
    }
    if (n % 15 === 0) {
        return "FizzBuzz";
    }
    if (n % 3 === 0) {
        return "Fizz";
    }
    if (n % 5 === 0) {
        return "Buzz";
    }
    return n.toString();
}
