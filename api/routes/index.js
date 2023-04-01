const express = require('express');


const productsRouter = require('./products')
const categoriesRouter = require('./categories')
const usersRouter = require('./users')
const customerRouter = require('./customer')
const categoryRouter = require('./categories')
const ordersRouter = require('./orders')

function routerApi(app){
  const router = express.Router()

  app.use('/api/v1', router)

  router.use('/products', productsRouter)
  router.use('/categories', categoriesRouter)

}
module.exports = routerApi;
