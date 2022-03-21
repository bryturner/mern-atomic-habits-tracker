const User = require("../models/user.model");

const verifyId = async function (id) {
  if (!id)
    return res
      .status(400)
      .json({ errorMessage: "No id was found in the cookie" });

  const matchingUser = await User.findOne({ _id: id });

  if (!matchingUser)
    return res.status(400).json({
      errorMessage: "Id not found in database",
    });
  return matchingUser;
};

module.exports = verifyId;
