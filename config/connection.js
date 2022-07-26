// import the sequalize constructor from the library
const Sequalize = require('sequelize');

require('dotenv').config();

// create connection to our database, pass in your MySQL info for user and password
const sequalize = new Sequalize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequalize;