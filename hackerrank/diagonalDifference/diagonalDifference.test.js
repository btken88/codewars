const diagonalDifference = require('./diagonalDifference')

test('should return the difference between diagonal sums in a 2d square array', () => {
  const array1 = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
  expect(diagonalDifference(array1)).toBe(15)
})
