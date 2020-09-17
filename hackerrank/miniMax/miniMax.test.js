const miniMax = require('./miniMax')

test('should return the smaller and larger sums on one line', () => {
  const array1 = [1, 2, 3, 4, 5]
  const array2 = [7, 69, 2, 221, 8974]
  expect(miniMax(array1)).toBe('10 14')
  expect(miniMax(array2)).toBe('299 9271')
})
