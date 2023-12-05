const { printHelpTable } = require('./helpTable')
const { getRules } = require('./ruleTable')
const { createSecretKey, createHMAC } = require('./hmac')
const { validateArguments } = require('./validate')
const { printMenu, printResults } = require('./menu')
const { HELP_OPTION, EXIT_OPTION } = require('./consts')
const { rl } = require('./readLine')

const initializeGame = () => {
  const key = createSecretKey()
  const gameArgs = process.argv.slice(2)

  if (validateArguments(gameArgs)) {
    startGame(gameArgs, key);
  } else {
    rl.close();
  }
};

const startGame = (gameArgs, key) => {
  const compMoveIndex = getComputerMove(gameArgs)
  const compMove = gameArgs[compMoveIndex]
  console.log(`HMAC: ${createHMAC(key, compMove)}`)

  printMenu(gameArgs)

  rl.prompt();
  rl.on('line', (input) => handleUserInput(input, gameArgs, compMove, compMoveIndex, key))
}

const handleUserInput = (input, gameArgs, compMove, compMoveIndex, key) => {
  const rules = getRules(gameArgs)

  if (!input) {
    console.log('Please make your move.');
    printMenu(gameArgs)
    return rl.prompt();
  }
  if (input === EXIT_OPTION) {
    return rl.close();
  }
  if (input === HELP_OPTION) {
    printHelpTable(rules, gameArgs);
    return rl.prompt();
  }

  const isNotAvailableOption = (+input < 1 || input > gameArgs.length || isNaN(input))
  if (isNotAvailableOption) {
    console.log('Select an option from available moves');
    printMenu(gameArgs)
    return rl.prompt();
  }

  const yourMove = input;

  const res = {
    yourMove: gameArgs[yourMove - 1],
    result: rules[compMoveIndex][yourMove - 1],
    compMove,
    key
  }
  printResults(res);
  rl.close();
};

const getComputerMove = (gameArgs) => Math.floor(Math.random() * gameArgs.length)

initializeGame();