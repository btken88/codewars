function compareTriplets(a, b) {
  const score = [0, 0]
  let index = 0
  while (index < 3) {
    if (a[index] > b[index]) {
      score[0]++
    } else if (a[index] < b[index]) {
      score[1]++
    }
    index++
  }
  return score
}

module.exports = compareTriplets