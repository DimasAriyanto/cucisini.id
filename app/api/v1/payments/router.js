const express = require('express');
const router = express();
const { create, index, find, update, destroy } = require('./controller');

router.get('/payments', index);
router.get(
  '/payments/:id',
  find
);
router.put(
  '/payments/:id',
  update
);
router.delete(
  '/payments/:id',
  destroy
);
router.post('/payments', create);

module.exports = router;