const repeatedString = require('./repeatedString')

test('should print the number of times the letter a occurs in a string repeated n times', () => {
  expect(repeatedString('aba', 10)).toBe(7)
  expect(repeatedString('a', 1000000000000)).toBe(1000000000000)
})