import jwt from "jsonwebtoken";

// check JWT Bearer token
export const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  console.log({ token });

  // Check if token is provided
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Invalid token",
      error: error.message,
    });
  }
};
