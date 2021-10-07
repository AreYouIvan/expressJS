// Calling the library.
const express = require('express');
const routerApi = require('./routes');
const app = express();
const port = 3001;

app.listen(port, () => {
});

routerApi(app);
