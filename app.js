const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');

const PORT = 1337;

const database = require('./database/database.js');
const routes = require('./routes/routes.js');
const app = express();

const main = require('./views/main.js');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: false}));
//app.use(express.json);

app.get('/', (req, res, next) => {
  res.send(main());
});

app.listen(PORT, () => {
	console.log(chalk.hex('#FF8800').bold('App listening in Port:'), chalk.blue(PORT));
});