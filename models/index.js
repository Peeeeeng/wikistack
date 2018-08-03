const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false
});

const Page = db.define('page', {
	title: {
		type: Sequelize.STRING,
		allowNull: false
	},
	slug: Sequelize.STRING,
	content: Sequelize.TEXT,
	status: Sequelize.ENUM('open', 'closed')
});

const User = db.define('user', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	email: {
		type: Sequelize.STRING,
    allowNull: false,
    isEmail: true
	}
});

module.exports = {
	Page,
  User,
  db
};