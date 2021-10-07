const productsRouter = require('./products.router')
const categoriesRouter = require('./categories.router')
const homeRouter = require('./home.router')
const ordersRouter = require('./orders.router')
const usersRouter = require('./users.router')

function routerApi (app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
  app.use('/orders', ordersRouter);
  app.use('/home', homeRouter);
}

module.exports = routerApi;
