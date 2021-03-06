const boom = require('@hapi/boom');
const { ValidationError } = require('sequelize');

// Middleware to save all the errors.
function logErrors(err, req, res, next) {
  console.error(err);
  next(err);
}

function errorHandler(err, req, res) {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    const { output } = err;
    res.status(
      output.statusCode).json(
        output.payload);
  }
  next(err);
}

function ormErrorHandler(err, req, res, next) {
  if(err instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: err.name,
      erros: err.erros
    });
  }
  next(err);
}

module.exports = {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler
};
