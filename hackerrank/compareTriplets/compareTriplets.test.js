const compareTriplets = require('./compareTriplets')

test('should compare arrays and return correct points', () => {
  const a = [17, 28, 30]
  const b = [99, 16, 8]

  expect(compareTriplets(a, b)).toStrictEqual([2, 1])
})
