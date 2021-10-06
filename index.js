const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

app.get('/home', (req, res) => {
  res.send('Que tal! estás en el home de la aplicación.');
});

app.get('/categories', (req, res) => {
  res.send('Estas son las categorias de la aplicación.');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'product',
      price: 1000,
    },
    {
      name: 'product 2',
      price: 1399,
    },
    {
      name: 'product 3',
      price: 799,
    },
  ]);
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
