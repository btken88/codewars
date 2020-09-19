module.exports = function jumpingOnClouds(clouds) {
  let steps = 0
  for (let i = 0; i < clouds.length - 1; i++) {
    if (clouds[i + 2] === 0) {
      i++
    }
    steps += 1
  }
  return steps
}