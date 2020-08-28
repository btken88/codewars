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

// 6kyu - Write number in expanded form
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

// 7kyu - String ends with?
function solution(str, ending) {
  return str.endsWith(ending)
}
solution('abcde', 'cde') // true
solution('abcde', 'abc') // false

// 7kyu - Compare x and o
function XO(xsAndOs) {
  xCount = xsAndOs.match(/x|X/)
  yCount = xsAndOs.match(/y|Y/)
  return xCount == yCount
}

// 7kyu - Number of people in the bus
var number = function (busStops) {
  return busStops.reduce((count, passengers) => {
    return count + passengers[0] - passengers[1]
  }, 0)
}

// 6kyu - Good vs Evil
function goodVsEvil(good, evil) {
  const goodValues = [1, 2, 3, 3, 4, 10]
  const evilValues = [1, 2, 2, 2, 3, 5, 10]
  const goodTotal = good.split(' ').reduce((sum, raceCount, i) => {
    return sum + raceCount * goodValues[i]
  }, 0)
  const evilTotal = evil.split(' ').reduce((sum, raceCount, i) => {
    return sum + raceCount * evilValues[i]
  }, 0)
  if (goodTotal < evilTotal) return "Battle Result: Evil eradicates all trace of Good";
  else if (goodTotal > evilTotal) return "Battle Result: Good triumphs over Evil";
  else return "Battle Result: No victor on this battle field";
}

// 7kyu - Get the Middle Character
function getMiddle(s) {
  if (s.length % 2 == 0) {
    return s.slice((s.length / 2), (s.length / 2 + 2))
  }
  else return s.charAt(s.length / 2 - 1)
}

// 6kyu - Which are in?
function inArray(array1, array2) {
  return array1.filter(item => array2.some(el => el.includes(item))).sort()
}

