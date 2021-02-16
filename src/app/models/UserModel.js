const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
  username: { type: String},
  password: { type: String},
  createAt: {type: Date, default: Date.now},
  UpdateAt: {type: Date, default: Date.now},
});

module.exports = mongoose.model('UserModel', user);