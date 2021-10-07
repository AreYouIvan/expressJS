const express = require('express');
const router = express.Router();

// Catching the params by url and print they in return.
router.get('/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

module.exports = router;
