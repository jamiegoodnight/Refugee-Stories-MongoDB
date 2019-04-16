const mongoose = require("mongoose");

const storySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  story: {
    type: String,
    required: true
  },
  highlight: {
    type: String,
    default: ""
  },
  verified: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("storie", storySchema);
