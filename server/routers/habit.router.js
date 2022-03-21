const router = require("express").Router();
const auth = require("../middleware/auth");
const Habit = require("../models/habit.model");

// get user habits list
router.get("/habitList", auth, async (req, res) => {
  try {
    const { id } = req.cookies.userData;

    const matchingUser = await Habit.findOne({ userId: id });

    const { habits } = matchingUser;

    res.json(habits);
  } catch (err) {
    console.error(err);
  }
});

// get all ids and habits
// ******for dev
router.get("/", auth, async (req, res) => {
  try {
    const userIdHabits = await Habit.find();
    res.send(userIdHabits);
  } catch (err) {
    console.error(err);
  }
});

// initialize habits db with userId
router.post("/", auth, async (req, res) => {
  try {
    const { id } = req.cookies.userData;
    const userId = id;
    const habits = [];

    const initIdHabits = new Habit({
      userId,
      habits,
    });

    await initIdHabits.save();
    res.send();
  } catch (err) {
    console.error(err);
  }
});

// Add a new habit to the user habits array
router.put("/newHabit", auth, async (req, res) => {
  try {
    const {
      habitTitle,
      habitDescription,
      habitFrequency,
      habitDuration,
      checkboxColor,
      checkboxesChecked,
    } = req.body;

    const newHabit = {
      habitTitle: habitTitle,
      habitDescription: habitDescription,
      habitFrequency: habitFrequency,
      habitDuration: habitDuration,
      checkboxColor: checkboxColor,
      checkboxesChecked: checkboxesChecked,
    };

    const { id } = req.cookies.userData;

    const matchingUser = await Habit.findOne({ userId: id });

    const { habits } = matchingUser;

    for (let i = 0; i < habits.length; i++) {
      if (habits[i].habitTitle === habitTitle) {
        return res.json(`${habitTitle} already exists`);
      }
    }

    await Habit.updateOne(
      { userId: matchingUser.userId },
      { $push: { habits: newHabit } }
    );

    res.send();
  } catch (err) {
    console.error(err);
  }
});

// delete a habit from the habits array based on the habit title
router.delete("/deleteHabit", auth, async (req, res) => {
  try {
    const { habitTitle } = req.body;
    const { id } = req.cookies.userData;

    const matchingUser = await Habit.findOne({ userId: id });

    const { habits } = matchingUser;

    for (let i = 0; i < habits.length; i++) {
      if (habits[i].habitTitle === habitTitle) {
        await Habit.updateOne(
          { userId: matchingUser.userId },
          { $pull: { habits: { habitTitle: habitTitle } } }
        );
        return res.json(`${habitTitle} has been deleted`);
      }
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
