
export function isPalindrome(str: string): boolean {
    const reversed = str.split('').reverse().join('');
    return str.toLowerCase() === reversed.toLowerCase();
 }