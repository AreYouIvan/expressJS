const express = require('express');
const router = express.Router();

// Challenge:
// Create the endpoints of GET and its detail.
// Products, Users, Categories, Buy orders.

/* And order must have:
- Order ID
- User ID

orders/:userId/:orderId

*/
// Creating the orders endpoint.
router.get('/', (req, res) => {
  const { userId, orderId } = req.params;
  res.json({
    user: userId,
    orders: orderId,
    username: 'User name',
  });
});

// Create
router.post('/:userId/:orderId', (req, res) => {
  const body = req.body;
  res.json({
    message: 'order created',
    body,
  });
});
// Delete
router.delete('/:userId/:orderId', (req, res) => {
  const { orderId } = req.params;
  res.json({
    message: 'order deleted',
    orderId,
  });
});

// Put
router.put('/:userId/:orderId', (req, res) => {
  const { orderId } = req.params;
  const body = req.body;
  res.json({
    message: 'Order updated',
    data: body,
    orderId,
  });
});

// Patch
router.patch('/:userId/:orderId', (req, res) => {
  const { orderId } = req.params;
  const body = req.body;
  res.json({
    message: 'Order updated',
    data: body,
    orderId,
  });
});

module.exports = router;
