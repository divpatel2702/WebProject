const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  description: String,
  imageUrl: String
});

module.exports = mongoose.model('Item', itemSchema);
