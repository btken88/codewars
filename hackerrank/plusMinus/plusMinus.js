function plusMinus(array) {
  let totals = {
    positive: 0,
    zero: 0,
    negative: 0
  }
  array.forEach(number => {
    if (number > 0) totals.positive = totals.positive + 1;
    if (number < 0) totals.negative += 1;
    if (number === 0) totals.zero += 1;
  })
  console.log(parseFloat((totals.positive / array.length).toFixed(6)))
  console.log(parseFloat((totals.negative / array.length).toFixed(6)))
  console.log(parseFloat((totals.zero / array.length).toFixed(6)))
}

module.exports = { plusMinus }