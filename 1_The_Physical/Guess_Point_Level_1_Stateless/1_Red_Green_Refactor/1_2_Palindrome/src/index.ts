 export function isPalindrome(value: string): boolean {    
    const str = value.replaceAll(" ", "").toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
 }