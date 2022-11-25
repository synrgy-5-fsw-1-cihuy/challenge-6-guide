const UserServices = require("../services/example");

exports.register = async (req, res) => {
  try {
    const user = await UserServices.register(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: {
        id: user.id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { user, token } = await UserServices.login(req.body);
    res
      .status(200)
      .json({ message: "User logged in successfully", data: { token } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
