const UsersService = require('../services/user.service');
const express = require('express');
const router = express.Router();
const service = new UsersService();


// Working on query params

router.get('/', async (req, res, next) => {
  try {
    const users = service.find();
    res.json(users);
  } catch (error) {
    next(error)
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
  const newUser = service.create(body);
  res.status(200).json(newUser);
});
// Delete
router.delete('/:userId', (req, res) => {
  const { userId } = req.params;
  const rta = service.delete(userId);
  res.json(rta);
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
  const user = service.update(userId, body);
  res.json(user);
});

module.exports = router;
