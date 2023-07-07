const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 1,
    max: 15,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

module.exports = model('User', UserSchema);
