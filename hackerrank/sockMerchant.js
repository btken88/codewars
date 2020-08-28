
function sockMerchant(n, ar) {
  const sockColors = ar.reduce((hash, color) => {
    console.log(hash, color)
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

const array = [10, 20, 20, 10, 10, 30, 50, 10, 20]

console.log(sockMerchant(7, array))