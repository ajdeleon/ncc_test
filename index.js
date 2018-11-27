const chalk = require('chalk')
console.log(chalk.yellow.bgBlue.bold('Hello there!'))
console.log(chalk.green.bgBlue.inverse('Hello there!'))
console.log(chalk`
Hi there this is some normal text
But {red.bgBlue this} {bold is anything but normal}
`)
