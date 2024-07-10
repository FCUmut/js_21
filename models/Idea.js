// convention with models that they are starting with uppercase

const mongoose = require("mongoose");

const IdeaSchema = new mongoose.Schema({
  // no need to include ID
  text: {
    type: String,
    required: [true, "Please add a text field"],
    // required: true
  },
  tag: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Idea", IdeaSchema);
