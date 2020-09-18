const arrayManipulation = require('./arrayManipulation')

test('should return the correct high value after manipulating the array', () => {
  let queries1 = [[1, 5, 3], [4, 8, 7], [6, 9, 1]]
  let queries2 = [[1, 2, 100], [2, 5, 100], [3, 4, 100]]

  expect(arrayManipulation(10, queries1)).toBe(10)
  expect(arrayManipulation(5, queries2)).toBe(200)
})