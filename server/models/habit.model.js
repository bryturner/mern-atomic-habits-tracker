const mongoose = require("mongoose");

// Use userId with empty array

// const habitSchema = new mongoose.Schema({
//   habitTitle: { type: String, required: true },
//   habitDescription: { type: String, required: true },
//   habitFrequency: { type: String, required: true },
//   habitDuration: { type: Number, required: true },
//   checkboxColor: { type: String, required: true },
//   checkboxesChecked: { type: Array, required: true },
// });

// const Habit = mongoose.model("habit", habitSchema);

const habitSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  habits: { type: Array, required: true },
});

const Habit = mongoose.model("habit", habitSchema);

module.exports = Habit;
