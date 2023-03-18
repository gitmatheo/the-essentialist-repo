import { fizzBuzz } from "./fizzbuzz";

describe("fizzbuzz", () => {

    it("should throw new Error 'Input must be a number' when given 'a' or null or undefined", () => {
        expect(() => fizzBuzz("a" as any)).toThrowError("Input must be a number");
        expect(() => fizzBuzz(null as any)).toThrowError("Input must be a number");
        expect(() => fizzBuzz(undefined as any)).toThrowError("Input must be a number");
    });

    it("should throw new Error 'Number must be between 1 and 100' when given 101", () => {
        expect(() => fizzBuzz(101)).toThrowError("Number must be between 1 and 100");
    });

    it("should throw new Error 'Number must be between 1 and 100' when given 0", () => {
        expect(() => fizzBuzz(0)).toThrowError("Number must be between 1 and 100");
    })

    it("should return a string", () => {
        expect(typeof fizzBuzz(1)).toEqual("string");
    })

    it("should return '1' when given 1", () => {
        expect(fizzBuzz(1)).toEqual("1");
    });
    
    it("should return 'Fizz' when given 3", () => {
        expect(fizzBuzz(3)).toEqual("Fizz");
    });
    
    it("should return 'Buzz' when given 5", () => {
        expect(fizzBuzz(5)).toEqual("Buzz");
    });
    
    it("should return 'FizzBuzz' when given 15", () => {
        expect(fizzBuzz(15)).toEqual("FizzBuzz");
    });
    
    it("should return 'Fizz' when given 9", () => {
        expect(fizzBuzz(9)).toEqual("Fizz");
    });
    
    it("should return 'Buzz' when given 10", () => {
        expect(fizzBuzz(10)).toEqual("Buzz");
    });

    it("should return 'FizzBuzz' when given 30", () => {
        expect(fizzBuzz(30)).toEqual("FizzBuzz");
    });
            
});
