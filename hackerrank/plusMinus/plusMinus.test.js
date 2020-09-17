const { plusMinus } = require('./plusMinus')

test('returns on 3 lines the ratio of positive, negative, and zero valuse in an array', () => {
  const consoleSpy = jest.spyOn(console, 'log')
  const array1 = [-4, 3, -9, 0, 4, 1]
  plusMinus(array1)

  expect(consoleSpy).toBeCalledWith(0.500000)
  expect(consoleSpy).toBeCalledWith(0.333333)
  expect(consoleSpy).toBeCalledWith(0.166667)
})