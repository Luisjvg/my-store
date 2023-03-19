const express = require('express');
const routerApi = require('./routes')
const cors = require('cors')

const { logErrors, errorHandler, boomErrorHandler } = require('./middleware/errorHandler')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json())
app.use(cors())

app.get('/api', (req, res) =>{
  res.send('Hola, soy una nueva ruta')
})

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () =>{
  console.log(`Mi port ${port}`)
})
