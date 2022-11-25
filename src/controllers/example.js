const UserServices = require("../services/example");

exports.register = async (req, res) => {
  try {
    const result = await UserServices.register(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const result = await UserServices.login(req.body);
    res
      .status(200)
      .json({ message: "User logged in successfully", data: result });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
