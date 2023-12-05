const AsciiTable = require('ascii-table')

const getHelpTable = (ruleTable, gameArgs) => {
  const table = new AsciiTable('Help')
  table.setHeading('v PC\\User >', ...gameArgs)

  ruleTable.forEach((row, index) => {
    table.addRow(gameArgs[index], ...row)
  })

  console.log(table.toString())
}

module.exports = { getHelpTable }