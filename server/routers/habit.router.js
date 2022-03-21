const router = require("express").Router();
const Habit = require("../models/habit.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const verifyUsername = require("../utils/helpers");
const verifyId = require("../utils/helpers");

// get user habits
router.get("/habits", auth, async (req, res) => {
  try {
    const { username } = req.cookies.userData;

    //  const verifiedUser = await verifyUsername(username);

    //  const { habits } = verifiedUser;

    res.json(habits);
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

    const matchingId = await Habit.findOne({ id });
    //  const verifiedUser = await verifyId(id);

    //  const existingHabit = verifiedUser.habits.find((habit) => {
    //    if (habit.habitTitle === habitTitle) {
    //      return habit;
    //    }
    //  });

    if (existingHabit === undefined) {
      const verifiedUserId = verifiedUser._id;
      await User.updateOne(
        { _id: verifiedUserId },
        { $push: { habits: newHabit } }
      );
      return res.json(`${newHabit.habitTitle} has been successfully added`);
    }

    const existingHabitTitle = existingHabit.habitTitle;
    if (existingHabitTitle === habitTitle) {
      return res.json(
        `A habit with the title ${existingHabit.habitTitle} already exists`
      );
    }
  } catch (err) {
    console.error(err);
  }
});

// Edit/Update a specific habit
router.put("/editHabit", auth, async (req, res) => {
  try {
    const {
      habitTitle,
      habitDescription,
      habitFrequency,
      habitDuration,
      checkboxColor,
    } = req.body;

    const { username } = req.cookies.userData;

    const verifiedUser = await verifyUsername(username);

    const existingHabit = verifiedUser.habits.find((habit) => {
      if (habit.habitTitle === habitTitle) {
        return habit;
      }
    });

    if (existingHabit === undefined) {
      return res.status(400).json({
        errorMessage: "Habit cannot be found",
      });
    }

    const existingHabitTitle = existingHabit.habitTitle;
    const verifiedUserUsername = verifiedUser.username;
    if (existingHabitTitle === habitTitle) {
      await User.updateOne(
        { username: verifiedUserUsername },
        {
          $set: {
            habits: {
              habitTitle: habitTitle,
              habitDescription: habitDescription,
              habitFrequency: habitFrequency,
              habitDuration: habitDuration,
              checkboxColor: checkboxColor,
            },
          },
        }
      );
      return res.json(`${habitTitle} has been successfully updated`);
    }
  } catch (err) {
    console.error(err);
  }
});

// delete a habit from the habits array based on the habit title
router.delete("/deleteHabit", auth, async (req, res) => {
  try {
    const { habitTitle } = req.body;
    const { username } = req.cookies.userData;

    const verifiedUser = await verifyUsername(username);

    const existingHabit = verifiedUser.habits.find((habit) => {
      if (habit.habitTitle === habitTitle) {
        return habit;
      }
    });

    if (existingHabit === undefined) {
      return res.json({
        errorMessage: `The habit title ${habitTitle} does not exist`,
      });
    }

    const verifiedUserUsername = verifiedUser.username;
    const existingHabitTitle = existingHabit.habitTitle;
    if (existingHabitTitle === habitTitle) {
      await User.updateOne(
        { username: verifiedUserUsername },
        { $pull: { habits: { habitTitle: habitTitle } } }
      );
      res.json(`You have successfully deleted ${habitTitle}`);
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
