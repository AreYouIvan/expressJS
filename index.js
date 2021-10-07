// Calling the library.
const express = require('express');
const app = express();
const port = 3001;

// This is the way to build a route.
app.get('/', (req, res) => {
  res.send('Hola mundo!');
});

app.get('/home', (req, res) => {
  res.send('Que tal! estás en el home de la aplicación.');
});

// Catching the params by url and print they in return.
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

// Challenge:
// Create the entities and endpoints of GET and its detail.
// Products, Users, Categories, Buy orders.



app.get('/products', (req, res) => {
  res.json([
    {
      name: 'product 1',
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

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 2000,
  });
});

app.listen(port, () => {
  console.log('Mi port' + port);
});
