const express = require('express');
const { index, find, update, destroy, create } = require('./controller');
const router = express();

router.post('/service', create);
router.get('/service', index);
router.get('/service/:id', find);
router.put('/service/:id', update);
router.delete('/service/:id', destroy);

module.exports = router;