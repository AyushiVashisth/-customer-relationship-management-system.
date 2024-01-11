// Middleware/middleware.js
const jwt = require("jsonwebtoken");
const { userModel } = require("../Models/User.model");

// Verify JWT token
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    // Check for presence of token
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await userModel.findById(decoded.userId);

    // Check if user exists
    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }

    req.user = {
      userId: user._id,
      fullName: user.fullName
    };

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

module.exports = { authMiddleware };