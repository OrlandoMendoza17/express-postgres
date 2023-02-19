const express = require("express");

const router = express.Router()

const TasksService = require("../services/tasks.service");

router.get("/", async (request, response, next) => {
  try {
    const service = new TasksService()
    const tasks = await service.getAll()

    response.json({
      length: tasks.length,
      data: tasks,
    })

  } catch (error) {
    next(error)
  }
})

module.exports = router;