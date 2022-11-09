// initalize Sequelize
const Sequelize = require('sequelize');

// require data stored in .env file
require('dotenv').config();

// set up sequelize variable to be reassigned value
let sequelize; 

// create connection to our db
// if connecting via JawsDB on heroku, run this first
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL);

// else, run the site using local .env   
} else {
    sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
}

module.exports = sequelize;
