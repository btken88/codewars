const jumpingOnClouds = require('./jumpingOnClouds')

test('should return the minimum number of jumps needed to win the game', () => {
  let array1 = [0, 0, 1, 0, 0, 1, 0]
  let array2 = [0, 0, 0, 0, 1, 0]

  expect(jumpingOnClouds(array1)).toBe(4)
  expect(jumpingOnClouds(array2)).toBe(3)
})
