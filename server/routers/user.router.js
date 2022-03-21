const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/user.model");

// Register user
router.post("/register", async (req, res) => {
  try {
    const { firstName, email, username, password, passwordVerify } = req.body;

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
    });

    const savedUser = await newUser.save();

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    const userData = {
      token: token,
      id: savedUser._id,
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

    const userData = {
      token: token,
      id: existingUser._id,
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

// Get users first name for welcome message
router.get("/firstName", auth, async (req, res) => {
  try {
    const { id } = req.cookies.userData;

    const matchingUser = await User.findOne({ _id: id });

    const { firstName } = matchingUser;
    res.json(firstName);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
