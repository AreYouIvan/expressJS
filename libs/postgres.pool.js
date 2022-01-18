const { Pool } = require('pg');
const { config } = require('./../config/config');

const { dbHost, dbPassword, dbUser, dbName, dbPort } = config;

const USER = encodeURIComponent(dbUser);
const PASSWORD = encodeURIComponent(dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;

  const pool = new Pool({ connectionString: URI });

module.exports = pool;


