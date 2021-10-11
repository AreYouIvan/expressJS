const express = require('express');
const router = express.Router();

// Creating the users en point.
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({
    userId,
    name: 'User name',
    username: 'User name',
    password: '324rewfds4',
  });
});

// Working on query params

router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parámetros');
  }
});
// Create
router.post('/', (req, res) => {
  const body = req.body;
  res.json({
    message: 'user created',
    body,
  });
});
// Delete
router.delete('/:userId', (req, res) => {
  const { userId } = req.params;
  res.json({
    message: 'User has deleted',
    userId,
  });
});

// Put
router.put('/:userId', (req, res) => {
  const { userId } = req.params;
  const body = req.body;
  res.json({
    message: 'User updated',
    data: body,
    userId,
  });
});

// Patch
router.patch('/:userId', (req, res) => {
  const { userId } = req.params;
  const body = req.body;
  res.json({
    message: 'User updated',
    data: body,
    userId,
  });
});

module.exports = router;
