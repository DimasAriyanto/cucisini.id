const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama layanan harus diisi'],
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Service', ServiceSchema);
