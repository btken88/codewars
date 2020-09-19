module.exports = function sparseArrays(strings, queries) {
  return queries.map(queryString => {
    return strings.reduce((total, string) => {
      return queryString === string ? total + 1 : total
    }, 0);
  })
}