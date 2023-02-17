const express = require("express")

const router = express.Router()

const TasksService = require("../services/tasks.service");

router.get("/", async (request, response) => {
  try {
    const service = new TasksService()
    const { rowCount, rows } = await service.getAll()

    response.json({
      length: rowCount,
      data: rows,
    })
    
  } catch (error) {
    console.log(error)
    response.json({
      error: "There has been an error!"
    })
  }
})

module.exports = router;