function simpleArraySum(ar) {
  return ar.reduce((sum, current) => {
    return sum + current
  }, 0)
}

module.exports = simpleArraySum;