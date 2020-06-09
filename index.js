// 8kyu - Counting sheep
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce(
    (total, current) => {
      if (current === true) {
        return total += 1;
      }
      else if (current != true) {
        return total
      }
    }, 0)
}