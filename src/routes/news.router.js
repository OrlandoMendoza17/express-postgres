const express = require("express")
const NewsService = require("../services/news.service")

const router = express.Router()

router.get("/", async (request, response) => {
  try {
    const service = new NewsService()
    const tasks = await service.getAll()
  
    response.json({
      message: "Hello!, This is THE TASKS Endpoint",
      tasks: tasks,
    })
    
  } catch (error) {
    console.log(error)
    response.json({
      error: "There has been an error!",
    })
  }
})

module.exports = router;