const staircase = require('./staircase')

test('should print a "staircase" of # n by n', () => {
  let consolelog = jest.spyOn(console, 'log')
  staircase(4)

  expect(consolelog).toBeCalledWith('   #')
  expect(consolelog).toBeCalledWith('  ##')
  expect(consolelog).toBeCalledWith(' ###')
  expect(consolelog).toBeCalledWith('####')
})
