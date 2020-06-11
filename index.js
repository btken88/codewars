// 8kyu - Counting sheep
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((total, current) => {
    return ((current === true) ? total += 1 : total)
  }, 0)
}

// 7kyu - Descending order
function descendingOrder(n) {
  let string = n.toString()
  let split = string.split('')
  let sorted = split.sort((a, b) => b - a)
  let joined = sorted.reduce((string, current) => string + current)
  let number = parseInt(joined)
  return number
}
// Descending order refactor
function descendingOrder(n) {
  return parseInt(n.toString().split('').sort((a, b) => b - a).reduce((string, current) => string + current))
}

// 6Kyu - Write number in expanded form
function expandedForm(num) {
  const numArray = num.toString().split('')
  let numString = `${numArray[0]}${'0'.repeat(numArray.length - 1)}`
  for (i = 1; i < numArray.length; i++) {
    if (numArray[i] != 0) {
      numString += (` + ${numArray[i]}${'0'.repeat(numArray.length - 1 - i)}`)
    }
  }
  return numString
}
expandedForm(70304)