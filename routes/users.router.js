const express = require('express');
const router = express.Router();
const UsersService = require('../services/user.service');

const service = new UsersService();


// Working on query params
router.get('/', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    const users = service.find();
    res.json(users);
  }
});

router.get('/filter', (req, res) => {
  res.send('soy un filter.');
});

// Creating the users end point.
router.get('/:userId', (req, res) => {
  const { userId } = req.params;
  const user = service.findOne(userId);
  res.json(user);
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
