const { Pool } = require('pg');
const { config } = require('./../config/config');

const { dbHost, dbPassword, dbUser, dbName, dbPort } = config;

let URI = '';

if (config.isProd) {
  URI = config.dbUrl;
} else {
  const USER = encodeURIComponent(dbUser);
  const PASSWORD = encodeURIComponent(dbPassword);
  URI = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`;
}

const pool = new Pool({ connectionString: URI });

module.exports = pool;
