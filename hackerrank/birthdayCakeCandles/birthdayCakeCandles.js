module.exports = function birthdayCakeCandles(candles) {
  let max = candles.reduce((max, candleHeight) => {
    return candleHeight > max ? candleHeight : max
  })
  return candles.reduce((count, candle) => {
    return candle === max ? count + 1 : count
  }, 0)
}