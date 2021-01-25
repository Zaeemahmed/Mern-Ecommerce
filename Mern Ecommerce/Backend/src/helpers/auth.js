const verifyAuthentication = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const user = jwt.verify(token, process.env.PRIVATE_KEY);
  if (user) {
    req.user = user;
  } else {
    return res.status(400).json({ message: "Authorization is required" });
  }
  next();
};

module.exports = { verifyAuthentication };
