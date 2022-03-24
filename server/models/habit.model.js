const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  habits: { type: Array, required: true },
});

const Habit = mongoose.model("habit", habitSchema);

module.exports = Habit;
