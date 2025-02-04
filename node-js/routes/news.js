const router = require("express").Router();
const category = require("./category");

router.get("/", (req, res) => {
  res.status(200).json(newsData);
});
router.use("/category", category);

module.exports = router;
