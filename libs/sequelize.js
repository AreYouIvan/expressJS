const { Sequelize } = require('sequelize');

const { config } = require ('./../config/config');

const { dbHost, dbPassword, dbUser, dbName, dbPort } = config;

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: console.log,
});

module.exports = sequelize;
