const router = require("express").Router();
const config = require("./config");

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Ini adalah halaman user",
  });
});

router.use("/config", config);

module.exports = router;
