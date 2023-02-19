const express = require("express")
const cors = require("cors")
const config = require("./src/config");

const app = express()

const routerApi = require("./src/routes");
const { logErrors, zodErrorHandler, httpErrorHandler, errorHandler } = require("./src/middlewares/errors.handlers");

const PORT = config.port;

app.use(express.json())

const whitelist = ["http://127.0.0.1:5173", "http://127.0.0.1:8000"]
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin) || !origin){
      callback(null, true)
    }else{
      callback(new Error("No está permitido acceder desde su dirección IP"))
    }
  }
}

app.use(cors());

app.get("/",(request, response) => {
  response.json({
    message: "Hello World!"
  })
})

routerApi(app)

app.use(logErrors)
app.use(zodErrorHandler)
app.use(httpErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`listening on PORT: http://localhost:${PORT}`)
})