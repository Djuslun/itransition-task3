const getRules = (arr) => {
  const res = Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    res[i] = Array(arr.length)
    res[i][i] = "Drow"
    for (let j = 0; j < arr.length - 1; j++) {
      let next = (i + j + 1) % arr.length
      if (j < (arr.length - 1) / 2) {
        res[i][next] = "Win"
      }
      else {
        res[i][next] = "Lose"
      }

    }
  }

  return res
}

module.exports = { getRules }