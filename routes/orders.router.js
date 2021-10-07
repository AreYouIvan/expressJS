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
router.get('/:userId/:orderId', (req, res) => {
  const { orderId, userId } = req.params;
  res.json({
    userId,
    orderId,
  });
});

module.exports = router;
