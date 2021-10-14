// Calling the library.
const express = require('express');
const routerApi = require('./routes');

const { logErrors, errorHandler } = require('./middlewares/error.hander');

const app = express();
const port = 3001;

app.use(express.json());

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {});



