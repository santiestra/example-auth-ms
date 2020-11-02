const jwt = require("jsonwebtoken");
const router = require("express").Router();
const CircuitBreaker = require("opossum");

router.post("/login", (req, res) => {
  // Esto seria una auth real, que consulte la pass del usuario, etc..

  const jwtExample = jwt.sign(
    {
      email: "test@test.com",
      role: "Superuser",
      canEdit: "true",
    },
    process.env.JWT_SECRET || "mysecret",
    { expiresIn: "2000000" }
  );
  res.json({ token: jwtExample });
});

module.exports = router;
