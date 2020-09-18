const rotateLeft = require('./rotateLeft')

test('should rotate an array a given number of elements left', () => {
  let array = [1, 2, 3, 4, 5]

  expect(rotateLeft(4, array)).toEqual([5, 1, 2, 3, 4])
  expect(rotateLeft(2, array)).toEqual([3, 4, 5, 1, 2])
})
