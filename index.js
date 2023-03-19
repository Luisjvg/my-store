const express = require('express');
const routerApi = require('./routes')
const cors = require('cors')

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/errorHandler')

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>{
  console.log(`Mi port ${port}`)
})
