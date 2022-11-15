const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  discount_price: {
    type: Number,
    required: true
  },
  category: {
    type: Array,
    required: true
  },
});

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;