const sockMerchant = require('./sockMerchant')

test('given array of numbers, should return number of pairs', () => {
  const array = [10, 20, 20, 10, 10, 30, 50, 10, 20]

  expect(sockMerchant(7, array)).toBe(3)
})
