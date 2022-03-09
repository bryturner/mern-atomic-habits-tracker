const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");

// Register user
router.post("/register", async (req, res) => {
  try {
    const { firstName, email, username, password, passwordVerify, habits } =
      req.body;

    // Capture error and display on front-end
    if (!firstName || !email || !username || !password || !passwordVerify)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields" });

    if (password.length < 8)
      return res.status(400).json({
        errorMessage: "Password must be at least 8 characters long",
      });

    if (password !== passwordVerify)
      return res.status(400).json({
        errorMessage: "Please enter the same password twice",
      });

    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail)
      return res.status(400).json({
        errorMessage: "An account with this email already exists",
      });

    const existingUsername = await User.findOne({ username });
    if (existingUsername)
      return res.status(400).json({
        errorMessage: "An account with this username already exists",
      });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      email,
      username,
      passwordHash,
      habits,
    });

    const savedUser = await newUser.save();

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    const currentUsername = savedUser.username;

    const userData = {
      token: token,
      username: currentUsername,
    };
    res
      .cookie("userData", userData, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// Log in user
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields" });

    const existingUser = await User.findOne({ username });
    if (!existingUser)
      return res.status(401).json({
        errorMessage: "Username or password is incorrect",
      });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({
        errorMessage: "Username or password is incorrect",
      });

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    const currentUsername = existingUser.username;

    const userData = {
      token: token,
      username: currentUsername,
    };

    res
      .cookie("userData", userData, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

// Log out user
router.get("/logout", (req, res) => {
  res
    .cookie("userData", "", {
      httpOnly: true,
      expires: new Date(0),
    })
    .send();
});

// Check if user is logged in
router.get("/loggedIn", (req, res) => {
  try {
    const { token } = req.cookies.userData;

    if (!token) return res.json(false);

    jwt.verify(token, process.env.JWT_SECRET);

    res.send(true);
  } catch (err) {
    res.json(false);
  }
});

// get matching user data
router.get("/userData", auth, async (req, res) => {
  try {
    const { username } = req.cookies.userData;

    if (!username)
      return res
        .status(400)
        .json({ errorMessage: "No username was found in the cookie" });

    const matchingUser = await User.findOne({ username });
    if (!matchingUser)
      return res.status(400).json({
        errorMessage: "Username not found in database",
      });

    const matchingUsername = matchingUser.username;

    if (username !== matchingUsername)
      return res
        .status(400)
        .json({ errorMessage: "No matching username was found in the DB" });

    if (username === matchingUsername) return res.json(matchingUser);
  } catch (err) {
    console.log(err);
  }
});

// Get users first name for welcome message
router.get("/userFirstName", auth, async (req, res) => {
  try {
    const { username } = req.cookies.userData;

    if (!username)
      return res
        .status(400)
        .json({ errorMessage: "No username was found in the cookie" });

    const matchingUser = await User.findOne({ username });
    if (!matchingUser)
      return res.status(400).json({
        errorMessage: "Username not found in database",
      });

    const matchingUsername = matchingUser.username;

    if (username !== matchingUsername)
      return res
        .status(400)
        .json({ errorMessage: "No matching username was found in the DB" });

    const userFirstName = matchingUser.firstName;
    if (username === matchingUsername) return res.json(userFirstName);
  } catch (err) {
    console.log(err);
  }
});

// Add a new habit to the user habits array
router.put("/habits", auth, async (req, res) => {
  try {
    const {
      habitTitle,
      habitDescription,
      habitFrequency,
      habitDuration,
      checkboxColor,
    } = req.body;

    const newHabit = {
      habitTitle: habitTitle,
      habitDescription: habitDescription,
      habitFrequency: habitFrequency,
      habitDuration: habitDuration,
      checkboxColor: checkboxColor,
    };

    const { username } = req.cookies.userData;

    if (!username)
      return res.status(400).json({ errorMessage: "No username from body" });

    const matchingUser = await User.findOne({ username });
    if (!matchingUser)
      return res.status(400).json({
        errorMessage: "Username not found in database",
      });

    const existingHabit = matchingUser.habits.find((habit) => {
      if (habit.habitTitle === habitTitle) {
        return habit;
      }
    });

    if (existingHabit === undefined) {
      const matchedUserId = matchingUser._id;
      await User.updateOne(
        { _id: matchedUserId },
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

    if (!username)
      return res.status(400).json({ errorMessage: "No username from body" });

    const matchingUser = await User.findOne({ username });
    if (!matchingUser)
      return res.status(400).json({
        errorMessage: "Username not found in database",
      });

    const existingHabit = matchingUser.habits.find((habit) => {
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

    const matchingUsername = matchingUser.username;

    if (existingHabitTitle === habitTitle) {
      await User.updateOne(
        { username: matchingUsername },
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
router.delete("/habits", auth, async (req, res) => {
  try {
    const { habitTitle } = req.body;

    const { username } = req.cookies.userData;

    const matchingUser = await User.findOne({ username });

    const existingHabit = matchingUser.habits.find((habit) => {
      if (habit.habitTitle === habitTitle) {
        return habit;
      }
    });

    if (existingHabit === undefined) {
      return res.json({
        errorMessage: `The habit title ${habitTitle} does not exist`,
      });
    }

    const existingHabitTitle = existingHabit.habitTitle;

    const matchingUsername = matchingUser.username;
    if (existingHabitTitle === habitTitle) {
      await User.updateOne(
        { username: matchingUsername },
        { $pull: { habits: { habitTitle: habitTitle } } }
      );
      res.json(`You have successfully deleted ${habitTitle}`);
    }
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
