const jwt = require("jsonwebtoken");

exports.generateAccessToken = (user) => {
  return jwt.sign(user, "guide-c6-secret-key", {
    expiresIn: "30m",
  });
};

exports.generateRefreshToken = (user) => {
  return jwt.sign(user, "guide-c6-secret-key");
};

exports.verifyAccessToken = (token) => {
  return jwt.verify(token, "guide-c6-secret-key");
};
