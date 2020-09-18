module.exports = function hourglassSum(array) {
  const sumArray = new Array(16)
  let sumIndex = 0
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      let hourglass = array[i][j] + array[i][j + 1] + array[i][j + 2] + array[i + 1][j + 1] + array[i + 2][j] + array[i + 2][j + 1] + array[i + 2][j + 2]
      sumArray[sumIndex] = hourglass
      sumIndex++
    }
  }
  return sumArray.sort((a, b) => b - a)[0]
}