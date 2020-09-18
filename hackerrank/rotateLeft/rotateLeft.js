module.exports = function rotateLeft(d, array) {
  let shifted = array.splice(0, d)
  let rotated = array.concat(shifted)
  return rotated
}