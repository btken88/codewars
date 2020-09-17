module.exports = function miniMax(array) {
  let sortedArray = array.sort()
  let low = sortedArray.slice(0, 4).reduce((sum, number) => {
    return sum + number
  }, 0)
  let high = sortedArray.slice(1).reduce((sum, number) => {
    return sum + number
  }, 0)
  return `${low} ${high}`
}