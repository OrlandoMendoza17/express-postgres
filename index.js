const express = require("express")
const config = require("./src/config");
const routerApi = require("./src/routes");
const app = express()

const PORT = config.port;

app.use(express.json())

routerApi(app)

app.get("/",(request, response) => {
  response.json({
    message: "Hello World!"
  })
})

app.listen(PORT, () => {
  console.log(`listening on PORT: http://localhost:${PORT}`)
})