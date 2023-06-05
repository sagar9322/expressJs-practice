// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-complete',
//     password: 'Sagar@549412'
// });

// module.exports = pool.promise();

const Sequelize = require('sequelize');
const sequelize = new Sequelize('node-complete', 'root', 'Sagar@549412', {dialect: 'mysql', host:'localhost'});

module.exports = sequelize;