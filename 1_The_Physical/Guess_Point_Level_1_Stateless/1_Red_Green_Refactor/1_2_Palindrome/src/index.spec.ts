import { isPalindrome } from './index'

describe('palindrome checker', () => {

    it('should return a boolean', () => {
        expect(typeof isPalindrome('mom')).toEqual('boolean')
    })

    it('should return true for a palindrome', () => {
        const palindroms = ['mom', 'dad', 'racecar', 'madam', 'level', 'noon', 'refer', 'rotator', 'sagas'];
        palindroms.forEach(palindrome => {
            expect(isPalindrome(palindrome)).toEqual(true)
        })
    });

    it('should return false for a non-palindrome', () => {
        const nonPalindroms = ['mommy', 'daddy', 'racecars', 'madams', 'levels', 'noons', 'refers'];
        nonPalindroms.forEach(nonPalindrome => {
            expect(isPalindrome(nonPalindrome)).toEqual(false)
        })
    })

    it('should still know that something is a palindrome, even if the casing is off', () =>{
        const palindroms = ['Mom', 'DaD', 'RaCecar', 'madAm', 'Level', 'Noon', 'REFER', 'RoTaTOR', 'sagaS'];
        palindroms.forEach(palindrome => {
            expect(isPalindrome(palindrome)).toEqual(true)
        })
    })
})