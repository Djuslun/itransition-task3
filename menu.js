const { HELP_OPTION, EXIT_OPTION } = require('./consts')

const printMenu = (gameArgs) => {
  const options = gameArgs.map((arg, index) => `${index + 1} - ${arg}`).join('\n')
  const menu = `Available moves:\n${options}\n${EXIT_OPTION} - exit\n${HELP_OPTION} - help`
  console.log(menu)
}

const printResults = ({ gameArgs, myMove, compMove, rules, compMoveIndex, key }) => {
  console.log(`Your move: ${gameArgs[myMove - 1]}`)
  console.log(`Computer move: ${compMove}`)
  console.log(`${rules[compMoveIndex][myMove - 1]}`)
  console.log(`HMAC Key: ${key}`)
}

module.exports = { printMenu, printResults }