const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fuelSchema = new Schema({
  date: { type: Date, default: Date.now },
  money: { type: Number, required: true },
  description: String,
  user: { type: mongoose.Types.ObjectId, required: true, ref: 'User' },
  // user: { type: String, required: true },
});

module.exports = mongoose.model('Fuel', fuelSchema);
