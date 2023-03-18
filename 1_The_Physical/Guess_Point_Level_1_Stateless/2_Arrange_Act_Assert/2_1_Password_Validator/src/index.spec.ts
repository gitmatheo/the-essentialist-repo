
import { validatePassword } from './index'

describe('password validator', () => {
    it('should return boolean', () => {
        expect(validatePassword('')).toBe(true)
    })

})



// > Write a function (or a class) for validating passwords. Passwords must meet the following criteria: 

// > Between 5 and 15 characters long
// > Contains at least one digit
// > Contains at least one upper case letter

// > Return an object containing a boolean result and an errors key that 
//  — when provided with an invalid password 
//  — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.