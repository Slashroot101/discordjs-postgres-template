const {Sequelize} = require('sequelize');
const {postgresUser, postgresDb, postgresPassword, dbHost} = require('../config');

const sequelize = new Sequelize(postgresDb, postgresUser, postgresPassword, {
    host: dbHost,
    dialect: 'postgres',
});

module.exports = sequelize;