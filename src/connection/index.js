const { Sequelize } = require("sequelize")
const config = require("../config/index");

const setupModels = require("../db/models");

const { dbUser, dbPassword, dbHost, dbPort, dbName } = config;

const USER = encodeURIComponent(dbUser)
const PASSWORD = encodeURIComponent(dbPassword)

const connectionString = `postgres://${USER}:${PASSWORD}@${dbHost}:${dbPort}/${dbName}`

const sequelize = new Sequelize(connectionString)

setupModels(sequelize)

// const pool = new Pool({ connectionString })

module.exports = sequelize;