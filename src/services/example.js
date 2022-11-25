const UserRepository = require("../repositories/example");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("../utils/jwt");

exports.register = async (userData) => {
  try {
    const { name, email, password } = userData;

    if (!name || !email || !password) {
      throw new Error("Name, email and password are required");
    }

    const user = await UserRepository.findUserByEmail(email);

    if (user) {
      throw new Error("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await UserRepository.createUser({
      email,
      password: hashedPassword,
    });

    return {
      email: newUser.email,
    };
  } catch (error) {
    throw error;
  }
};

exports.login = async (userData) => {
  try {
    const { email, password } = userData;

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const user = await UserRepository.findUserByEmail(email);

    if (!user) {
      throw new Error("User does not exist");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    const token = generateAccessToken({ id: user.id });

    return { token };
  } catch (error) {
    throw error;
  }
};
