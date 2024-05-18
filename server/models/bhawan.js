const mongoose = require('mongoose');

const BhawanSchema = new mongoose.Schema({
  bhawanName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Bhawan = mongoose.model('Bhawan', BhawanSchema);

module.exports = Bhawan;