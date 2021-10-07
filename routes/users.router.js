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

module.exports = router;
