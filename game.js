const { getHelpTable } = require('./helpTable')
const { getRules } = require('./ruleTable')
const { createSecretKey, createHMAC } = require('./hmac')
const { validateArguments } = require('./validate')
const { printMenu, printResults } = require('./menu')
const { HELP_OPTION, EXIT_OPTION } = require('./consts')

const readline = require('readline');
const output = process.stdout;
const input = process.stdin;
const rl = readline.createInterface({ input, output });

const gameArgs = process.argv.slice(2)
const key = createSecretKey()

const getComputerMove = (gameArgs) => Math.floor(Math.random() * gameArgs.length)

const startGame = (gameArgs) => {
  const rules = getRules(gameArgs)

  const compMoveIndex = getComputerMove(gameArgs)
  const compMove = gameArgs[compMoveIndex]
  console.log(`HMAC: ${createHMAC(key, compMove)}`)

  printMenu(gameArgs)

  rl.setPrompt('Enter your move: ');
  rl.prompt();

  rl.on('line', (input) => {
    if (!input) {
      console.log('Please make your move.');
      rl.prompt();
      return;
    }
    if (input === EXIT_OPTION) {
      return rl.close()
    }
    if (input === HELP_OPTION) {
      const helpTable = getHelpTable(rules, gameArgs)
      rl.prompt();
      return
    }

    const myMove = input
    printResults({ gameArgs, myMove, compMove, rules, compMoveIndex, key })
    rl.close()
  })
}

(() => {
  if (validateArguments(gameArgs)) {
    startGame(gameArgs)
  } else {
    rl.close()
  }
})()