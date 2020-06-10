// 8kyu - Counting sheep
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((total, current) => {
    return ((current === true) ? total += 1 : total)
  }, 0)
}

// 7kyu - Descending order
function descendingOrder(n) {
  let string = n.toString()
  split = string.split('')
  sorted = split.sort((a, b) => b - a)
  joined = sorted.reduce((string, current) => string + current)
  number = parseInt(joined)
  return number
}
// Descending order refactor
function descendingOrder(n) {
  return parseInt(n.toString().split('').sort((a, b) => b - a).reduce((string, current) => string + current))
}