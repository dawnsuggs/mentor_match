const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fistName: { type: String, required: false },
  lastName: { type: String, required: false },
  email: { type: String, required: false },
  username: { type: String, required: false },
  password: { type: String, required: false },
  about: {type: String, required: false},
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

