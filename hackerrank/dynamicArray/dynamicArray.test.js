const dynamicArray = require('./dynamicArray')

test('should print the correct values to the console.', () => {
  let consoleLogs = jest.spyOn(console, 'log')

  let testInput = [[1, 0, 5], [1, 1, 7], [1, 0, 3], [2, 1, 0], [2, 1, 1]]
  dynamicArray(2, testInput)

  expect(consoleLogs).toBeCalledWith(7)
  expect(consoleLogs).toBeCalledWith(3)
})
