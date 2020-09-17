module.exports = function staircase(dimension) {
  for (let i = 1; i <= dimension; i++) {
    console.log(" ".repeat(dimension - i) + "#".repeat(i))
  }
}