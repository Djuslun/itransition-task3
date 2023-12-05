const validateArguments = (gameArs) => {
  // Возвращаемое значение true/false обозначает прошли аргументы валидацию, или нет
  if ((gameArs.length % 2) !== 1) {
    console.log('The number of arguments must be odd')
    return false
  }
  if (gameArs.length <= 1) {
    console.log('The number of arguments must be more than 1')
    return false
  }
  if (new Set(gameArs).size !== gameArs.length) {
    console.log('Argгuments must be unique')
    return false
  }

  return true
}

module.exports = { validateArguments }