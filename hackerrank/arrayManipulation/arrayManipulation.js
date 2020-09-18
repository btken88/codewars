module.exports = function arrayManipulation(n, queries) {
  let array = new Array(n).fill(0)
  queries.forEach(query => {
    for (let j = query[0] - 1; j < query[1]; j++) {
      array[j] += query[2]
    }
  })
  return array.sort((a, b) => b - a)[0]
}