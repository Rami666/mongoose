const User = require("../models/User");

module.exports.register = async (req, res) => {
  try {
    console.log("Hello from register", req.body);

    await User.create(req.body);

    res.send("Hello from register");

    res.send({ success: true });
  } catch (error) {
    console.log("register error", error.message);

    res.send({ success: false, error: error.message });
  }
};

module.exports.login = async (req, res) => {
  try {
    console.log("Hello from login", req.body);

    // User.findOne(some object) will return the first user that matches the object
    const user = await User.findOne(req.body).select("-password -__v");

    console.log(user);

    res.send({ success: true, user });
  } catch (error) {
    console.log("Login error", error.message);

    res.send({ success: false, error: error.message });
  }
};
