const express = require('express');
const webpack = require('webpack');
const webpackDev = require('webpack-dev-middleware');
const webpackconfig = require('./webpack.config')
const path = require('path')
const { logErrors, errorHandler, boomErrorHandler } = require('./api/middleware/errorHandler')
const routerApi = require('./api/routes')
const cors = require('cors')
require('./api/utils/auth')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())
app.use(webpackDev(webpack(webpackconfig)))

// static files
app.use('/static', express.static(path.join(__dirname, 'public')))

// Middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

// Routes
routerApi(app);

app.listen(port, () =>{
  console.log(`Mi port ${port}`)
  console.log(__dirname)
})

