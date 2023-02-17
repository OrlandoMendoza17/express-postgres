// const { Sequelize } = require("sequelize")

const { Pool } = require("pg");
const config = require("../config/index")

const { dbUser, dbPassword, dbHost, dbPort, dbName } = config;

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)

const connectionString = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const pool = new Pool({ connectionString })

module.exports = pool;