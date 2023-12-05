const gameArgs = process.argv.slice(2)
const { getHelpTable } = require('./helpTable')
const { getRules } = require('./ruleTable')
const { createSecretKey, createHMAC } = require('./hmac')
const { validateArguments } = require('./validate')


if (validateArguments(gameArgs)) {
  const rules = getRules(gameArgs)
  const helpTable = getHelpTable(rules, gameArgs)
}
