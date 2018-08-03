const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const { page, user, db } = require('./models/index.js');

const PORT = 1337;

const routes = require('./routes/routes.js');
const app = express();

const main = require('./views/main.js');

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
//app.use(express.json);

app.use('/wiki', routes);

app.get('/', (req, res, next) => {
    res.redirect('/wiki')
});



const init = async() => {
    await db.sync({ force: true });
    app.listen(PORT, () => {
        console.log(chalk.bgRedBright("*****************************"));
        console.log(chalk.hex('#FF8800').bold('App listening in Port:'), chalk.blue(PORT));
        console.log(chalk.bgRedBright("****************************"));
    });
};

init();