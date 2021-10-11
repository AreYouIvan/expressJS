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

router.post('/:categoryId', (req, res) => {
  const body = req.body;
  res.json({
    message: 'Category created',
    body,
  });
});
// Delete
router.delete('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  res.json({
    message: 'Category deleted',
    categoryId,
  });
});

// Put
router.put('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  const body = req.body;
  res.json({
    message: 'Category updated',
    data: body,
    categoryId,
  });
});

// Patch
router.patch('/categoryId', (req, res) => {
  const { categoryId } = req.params;
  const body = req.body;
  res.json({
    message: 'Category updated',
    data: body,
    categoryId,
  });
});

module.exports = router;
