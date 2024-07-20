const express = require('express');
const { createCMSLaundryPartner } = require('./controller');
const router = express();

router.post(
  '/partner',
  createCMSLaundryPartner
);

module.exports = router;