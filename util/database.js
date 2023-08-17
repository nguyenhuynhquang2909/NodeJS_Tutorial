const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Bebong123', {
    dialect: 'mysql',
    host: 'localhost',
});
module.exports = sequelize;
