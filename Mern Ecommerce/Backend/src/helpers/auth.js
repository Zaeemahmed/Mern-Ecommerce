const jwt = require("jsonwebtoken");
const verifyAuthentication = (req, res, next) => {
  if (req.headers && req.headers.authorization) {
    const token = req.headers.authorization.split(" ")[1];
    const user = jwt.verify(token, process.env.PRIVATE_KEY);
    if (user) {
      req.user = user;
    } else {
      return res.status(400).json({ message: "Authorization is required" });
    }
    next();
  } else {
    return res.status(400).json({ message: "Authorization is required" });
  }
};

module.exports = { verifyAuthentication };
