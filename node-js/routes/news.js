const router = require("express").Router();
const category = require("./category");
const newsData = require("../data.json");

router.get("/", (req, res) => {
  res.status(200).json(newsData);
});
router.use("/category", category);
s;
module.exports = router;
