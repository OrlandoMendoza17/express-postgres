const express = require("express")
const { CreateNewSchema, NewSchemaId } = require("../schemas/news.schema")

const router = express.Router()

const NewsService = require("../services/news.service")

const service = new NewsService()

router.get("/", async (request, response, next) => {
  try {

    const news = await service.getAll()
    response.json(news)

  } catch (error) {
    next(error)
  }
})

router.get("/:id", async (request, response, next) => {
  try {

    const validadtedNewId = NewSchemaId.parse(parseInt(request.params.id))
    const fetchedNew = await service.findOne(validadtedNewId)
    response.json(fetchedNew)

  } catch (error) {
    next(error)
  }
})

router.post("/",(request, response, next) => {
  try {
    
    const validadtedNew = CreateNewSchema.parse(request.body)
    // service
    
    
  } catch (error) {
    next(error)
  }
})


module.exports = router;