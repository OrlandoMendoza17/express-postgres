const express = require("express")

const router = express.Router()

const NewsService = require("../services/news.service")

const service = new NewsService()

router.get("/", async (request, response) => {
  try {
    const { rowCount, rows } = await service.getAll()

    response.json({
      length: rowCount,
      data: rows,
    })

  } catch (error) {
    console.log(error)
    response.json({
      error: "There has been an error!",
    })
  }
})

router.get("/:id", async (request, response) => {

  const fetchedNew = await service.findOne(request.params.id)

  response.json({ ...fetchedNew })
})

module.exports = router;