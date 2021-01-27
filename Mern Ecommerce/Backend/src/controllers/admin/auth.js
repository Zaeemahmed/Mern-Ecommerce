const verifyAdmin = (req, res, next) => {
  const role = req.user.role;
  if (role == "admin") {
    next();
  } else {
    return res.status(400).json({ message: "Authorization failed as admin" });
  }
};

module.exports = { verifyAdmin };
