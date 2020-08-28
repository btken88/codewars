const aVeryBigSum = require('./aVeryBigSum')

test('returns the large sum of all array values', () => {
  const input = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

  expect(aVeryBigSum(input)).toBe(5000000015)
})
