const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  habitTitle: { type: String, required: true },
  habitDescription: { type: String, required: true },
  habitFrequency: { type: String, required: true },
  habitDuration: { type: Number, required: true },
  checkboxColor: { type: String, required: true },
});

const Habit = mongoose.model("habit", habitSchema);

module.exports = Habit;
