const createHttpError = require("http-errors")
const { ZodError } = require("zod")

function logErrors(error, request, response, next) {
  console.log(error)
  next(error)
}

function zodErrorHandler(error, request, response, next) {
  console.log("ZodError Handler");

  if (error instanceof ZodError) {
    const httpError = new createHttpError.BadRequest()

    const { issues } = error
    const { name, statusCode, message } = httpError

    response.status(statusCode).json({
      name, statusCode, issues, message
    })
  } else {
    next(error)
  }
}

function httpErrorHandler(error, request, response, next) {
  console.log("HttpError Handler");
  if (createHttpError.isHttpError(error)) {
    const { name, statusCode, message } = error
    response.status(statusCode).json({
      name, statusCode, message
    })
  } else {
    next(error)
  }
}

function errorHandler(error, request, response, next){
  const httpError = new createHttpError.InternalServerError()
  const {name, statusCode, message} = httpError
  response.status(statusCode).json({
    name, statusCode, message
  })
}

module.exports = { logErrors, zodErrorHandler, httpErrorHandler, errorHandler }