function diagonalDifference(array) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < array.length; i++) {
    sum1 += array[i][i]
    sum2 += array[i][array.length - 1 - i]
  }
  return Math.abs(sum1 - sum2)
}

module.exports = diagonalDifference