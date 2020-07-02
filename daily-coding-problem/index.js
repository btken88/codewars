// Problem 1
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

function addUp(list, k) {
  for (index in list) {
    for (secondIndex in list) {
      if (list[index] + list[secondIndex] === k) { return true }
    }
  }
  return false
}
// console.log(addUp([10, 15, 3, 7], 17))

// Flatiron checksum
// The spreadsheet consists of rows of seemingly-random numbers. To make sure the recovery process is on the right track, they need you to calculate the spreadsheet's checksum.
// For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.

function checkSum(spreadsheet) {
  const rowCheckSums = spreadsheet.map(row => {
    const max = row.sort((a, b) => { return a - b })[row.length - 1]
    const min = row.sort((a, b) => { return a - b })[0]
    return max - min
  });
  return rowCheckSums.reduce((sum, current) => {
    return sum + current
  }, 0)
}

let data = [
  [409, 194, 207, 470, 178],
  [454, 235, 333, 511, 103],
  [474, 293, 525, 372, 408],
  [428, 4321, 2786, 6683, 3921],
  [265, 262, 6206, 2207, 5712]
]
console.log(checkSum(data))