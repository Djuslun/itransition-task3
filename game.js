const gameArgs = process.argv.slice(2)
const { getHelpTable } = require('./helpTable')
const { getRules } = require('./ruleTable')

const rules = getRules(gameArgs)
const helpTable = getHelpTable(rules, gameArgs)