const router = require("express").Router();
const CircuitBreaker = require("opossum");
const jwt = require('jsonwebtoken');

router.get("/", (req, res) => {
  const authHeader = req.header('Authorization').replace('Bearer ', '');
  const decodedToken = jwt.verify(authHeader, process.env.JWT_SECRET || "mysecret");
  const { email, role } = decodedToken;

  res.json({ hello: `Hola ${email}, tu rol es ${role}` });
});

module.exports = router;
