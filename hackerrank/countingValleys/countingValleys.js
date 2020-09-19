module.exports = function countingValleys(steps, path) {
  let elevation = 0
  let newElevation = 0
  let valleys = 0
  for (let i = 0; i < steps; i++) {
    path[i] === 'D' ? newElevation -= 1 : newElevation += 1
    if (elevation === 0 && newElevation === -1) valleys += 1
    elevation = newElevation
  }
  return valleys
}
