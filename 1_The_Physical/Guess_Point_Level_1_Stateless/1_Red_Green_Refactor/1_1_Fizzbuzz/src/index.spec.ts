import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("should return a string", () => {
        expect(typeof fizzBuzz(1)).toEqual("string");
    })

    it("should throw new Error 'Input must be a number' when given value is not a number", () => {
        const notAllowedValues = ["a", null, undefined, true, false, [], {}];

        notAllowedValues.forEach((n) => {
            expect(() => fizzBuzz(n as any)).toThrowError("Input must be a number");
        })
    });

    it("should throw new Error 'Number must be between 1 and 100' when given number is not between 1 and 100", () => {
        const notAllowedNumbers = [0, -1, -100, -101, 101, 1000, Infinity];

        notAllowedNumbers.forEach((n) => {
            expect(() => fizzBuzz(n)).toThrowError("Number must be between 1 and 100");
        })
    });

    it("should return 'FizzBuzz' when given number is divisible by 3 and 5", () => {
        const divisibleBy3And5 = [15, 30, 45, 60, 75, 90];
        divisibleBy3And5.forEach((n) => {
            expect(fizzBuzz(n)).toEqual("FizzBuzz");
        })
    });
    
    it("should return 'Fizz' when given number is divisible by 3", () => {
        const divisibleBy3 = [3, 6, 48, 51, 54, 96, 99]; 
        divisibleBy3.forEach((n) => {
            expect(fizzBuzz(n)).toEqual("Fizz");
         })
    });
    
    it("should return 'Buzz' when given number is divisible by 5", () => {
        const divisibleBy5 = [5, 10, 50, 55, 95, 100];
        divisibleBy5.forEach((n) => {
            expect(fizzBuzz(n)).toEqual("Buzz");
         })
    });

});
