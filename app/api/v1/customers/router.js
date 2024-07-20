const express = require('express');
const router = express();
const {
  signup,
  activate,
  signin,
} = require('./controller');

router.post('/auth/signup', signup);
router.post('/auth/signin', signin);
router.put('/active', activate);

module.exports = router;