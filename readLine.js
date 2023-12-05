const readline = require('readline');
const output = process.stdout;
const input = process.stdin;
const rl = readline.createInterface({ input, output });
rl.setPrompt('Enter your move: ');

module.exports = { rl }