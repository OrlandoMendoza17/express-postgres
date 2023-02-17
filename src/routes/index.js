const newsRouter = require("./news.router")
const tasksRouter = require("./tasks.router")

const routerApi = (app) =>{
  app.use("/news", newsRouter)
  app.use("/tasks", tasksRouter)
}

module.exports = routerApi;