const simpleArraySum = require('./simpleArraySum')

test('adds the elements of an array and returns the sum', () => {
  const array1 = [1, 1, 1]
  expect(simpleArraySum(array1)).toBe(3)
})