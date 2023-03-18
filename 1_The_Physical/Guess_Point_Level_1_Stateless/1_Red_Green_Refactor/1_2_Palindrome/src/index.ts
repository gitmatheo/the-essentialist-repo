 export function isPalindrome(value: string): boolean {    
    if(typeof value !== "string") {
        throw new Error("Input must be a string");
    }
    const str = value.replaceAll(" ", "").toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
 }