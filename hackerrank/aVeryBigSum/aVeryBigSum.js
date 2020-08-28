function aVeryBigSum(array) {
  return array.reduce((sum, current) => {
    return sum + current
  }, 0)
}

module.exports = aVeryBigSum