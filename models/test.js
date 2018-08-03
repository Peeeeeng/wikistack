const { db } = require('./index.js');
const chalk = require('chalk');

db.authenticate().then(() => {
  console.log(chalk.blue("connected to the database"));
})
