const User = require("../models/user.model");

const verifyUsername = async function (username) {
  if (!username)
    return res
      .status(400)
      .json({ errorMessage: "No username was found in the cookie" });

  const matchingUser = await User.findOne({ username });
  if (!matchingUser)
    return res.status(400).json({
      errorMessage: "Username not found in database",
    });
  return matchingUser;
};

module.exports = verifyUsername;
