const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Que tal! estás en el home de la aplicación.');
});

module.exports = router;
