const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  uid: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: false
  },
});

const Post = mongoose.model('blog', PostSchema);
module.exports = Post;