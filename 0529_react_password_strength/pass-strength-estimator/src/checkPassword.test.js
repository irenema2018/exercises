import checkPassword from './checkPassword.js'

test('1 point for lower case letters', () => {
  expect(checkPassword('pudding')).toEqual({
    score: 1, 
    hasLowerCase: true, 
    hasUpperCase: false,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  })
}) 

test('1 point for upper case letters', () => {
  expect(checkPassword('Pudding')).toEqual({
    score: 2, 
    hasLowerCase: true, 
    hasUpperCase: true,
    hasNumber: false,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  })
}) 

test('1 point for numbers', () => {
  expect(checkPassword('Puddin1')).toEqual({
    score: 3, 
    hasLowerCase: true, 
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: false,
    isOver8Char: false,
    isOver12Char: false
  })
}) 

test('1 point for non alpha numeric characters', () => {
  expect(checkPassword('Pudd1!')).toEqual({
    score: 4, 
    hasLowerCase: true, 
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: false,
    isOver12Char: false
  })
}) 

test('1 point for 8 characters or more', () => {
  expect(checkPassword('Pudding1!')).toEqual({
    score: 5, 
    hasLowerCase: true, 
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: true,
    isOver12Char: false
  })
}) 

test('1 point for 12 characters or more', () => {
  expect(checkPassword('Pudding123!@')).toEqual({
    score: 6,
    hasLowerCase: true, 
    hasUpperCase: true,
    hasNumber: true,
    hasNonAlphaNumeric: true,
    isOver8Char: true,
    isOver12Char: true
  })
}) 
