// 8kyu - Counting sheep
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((total, current) => {
    return ((current === true) ? total += 1 : total)
  }, 0)
}