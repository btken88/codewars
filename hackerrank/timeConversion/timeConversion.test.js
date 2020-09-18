const timeConversion = require('./timeConversion')

test('should convert 12-hour am/pm time to 24-hour time', () => {
  expect(timeConversion('12:01:00PM')).toBe('12:01:00')
  expect(timeConversion('12:01:00AM')).toBe('00:01:00')
  expect(timeConversion('07:05:45PM')).toBe('19:05:45')
})
