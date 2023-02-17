const dotenv = require("dotenv")
dotenv.config()

const config = {
  port: process.env.PORT || 3001,
  dbUser: "orlando",
  dbPassword: "sipi1762",
  dbHost: "localhost",
  dbPort: 5432,
  dbName: "sipi",
}

module.exports = config