const sparseArrays = require('./sparseArrays')

test('should return the count of each query instance in the array of strings', () => {
  let strings = ['aba', 'baba', 'aba', 'xzxb']
  let queries = ['aba', 'xzxb', 'ab']
  expect(sparseArrays(strings, queries)).toEqual([2, 1, 0])

  strings = ['def', 'de', 'fgh']
  queries = ['de', 'lmn', 'fgh']
  expect(sparseArrays(strings, queries)).toEqual([1, 0, 1])
})
