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
  console.log("Hello from login", req.body);

  const user = await User.find({
    email: req.body.email,
    password: req.body.password,
    
  })

  console.log(user);
    

  res.send("Hello from login");
};