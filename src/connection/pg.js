const { Client } = require("pg")
const config = require("../config/index");

const { dbUser, dbPassword, dbHost, dbPort, dbName } = config;

const getConnection = async () => {
  const client = new Client({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPassword,
    database: dbName,
  });
  await client.connect();
  return client;
}

module.exports = getConnection;