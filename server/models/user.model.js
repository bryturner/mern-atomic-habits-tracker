const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  passwordHash: { type: String, required: true },
  habits: { type: Array },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
