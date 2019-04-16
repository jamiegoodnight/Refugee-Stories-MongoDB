const mongoose = require("mongoose");

const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    default: "admin"
  }
});

module.exports = mongoose.model("user", loginSchema);
