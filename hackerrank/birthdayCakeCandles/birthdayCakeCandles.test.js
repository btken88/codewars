const birthdayCakeCandles = require('./birthdayCakeCandles')

test('should return the number of candles with the greatest height', () => {
  let candles = [3, 2, 1, 3]

  expect(birthdayCakeCandles(candles)).toBe(2)
})
