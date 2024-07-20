const mongoose = require('mongoose');

const laundryPartnerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  contact: {
    type: String,
    required: true
  },
  portfolio: {
    type: String
  },
});

module.exports = mongoose.model('LaundryPartner', laundryPartnerSchema);
