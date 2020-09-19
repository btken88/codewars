const countingValleys = require('./countingValleys')

test('should return the number of "valleys" a hiker enters from array input', () => {
  array1 = ['D', 'D', 'U', 'U', 'U', 'U', 'D', 'D']
  array2 = ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U']

  expect(countingValleys(8, array1)).toBe(1)
  expect(countingValleys(8, array2)).toBe(1)
})
