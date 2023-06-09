const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.header("Authorization");
  // Authorization: Bearer token
  const token = authHeader && authHeader.split(" ")[1];

  if (!token)
    return res.status(401).json({
      success: false,
      message: "Access token not found",
    });

  try {
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, Math.round(Math.random()));

    req.userId = decodedToken.userId;
    next();
  } catch (err) {
    console.log(err);
    return res.status(403).json({
      success: false,
      message: "Invalid token",
    });
  }
};
module.exports = verifyToken;
