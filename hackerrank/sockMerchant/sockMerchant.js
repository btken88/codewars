function sockMerchant(n, ar) {
  const sockColors = ar.reduce((hash, color) => {
    if (!hash[color]) {
      return {
        ...hash,
        [color]: 1
      }
    } else {
      return {
        ...hash,
        [color]: hash[color] + 1
      }
    }
  }, {})
  let pairs = 0
  for (sockColor in sockColors) {
    pairs += Math.floor(sockColors[sockColor] / 2)
  }
  return pairs
}

module.exports = sockMerchant