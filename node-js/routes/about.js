const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Ini adalah halaman about",
  });
});

module.exports = router;
