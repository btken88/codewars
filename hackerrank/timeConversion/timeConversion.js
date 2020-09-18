module.exports = function timeConversion(time) {
  let amOrPm = time.slice(8)
  let hour = time.slice(0, 2)
  let minSec = time.slice(2, 8)
  if (amOrPm === 'AM') {
    if (hour === '12') {
      return `00${time.slice(2, 8)}`
    }
    return `${hour}${minSec}`
  }
  if (hour === '12') {
    return `${hour}${minSec}`
  }
  return `${parseInt(hour) + 12}${minSec}`
}