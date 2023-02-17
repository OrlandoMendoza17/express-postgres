const newsRouter = require("./news.router")

const routerApi = (app) =>{
  app.use("/news", newsRouter)
}

module.exports = routerApi;