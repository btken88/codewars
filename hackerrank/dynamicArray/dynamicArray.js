module.exports = function dynamicArray(n, array) {
  let seq = Array.from(Array(n), () => [])
  let lastAnswer = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] === 1) {
      let sequenceIndex = ((array[i][1] ^ lastAnswer) % n)
      seq[sequenceIndex].push(array[i][2])
    } else {
      let sequenceIndex = ((array[i][1] ^ lastAnswer) % n)
      let location = array[i][2] % seq[sequenceIndex].length
      lastAnswer = seq[sequenceIndex][location]
      console.log(lastAnswer)
    }
  }
}