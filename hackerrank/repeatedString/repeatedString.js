module.exports = function repeatedString(string, n) {
  if (string === 'a') return n
  let aCount = string.split('').reduce((count, letter) => {
    return letter === 'a' ? count + 1 : count
  }, 0)
  let aSubtotal = aCount * Math.floor(n / string.length)
  string.slice(0, n % string.length).split('').forEach(letter => {
    if (letter === 'a') aSubtotal += 1
  })
  return aSubtotal
}