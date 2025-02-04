const router = require("express").Router();
const news = require("./news");
const about = require("./about");
const contact = require("./contact");
const user = require("./user");


router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Selamat datang di Homepage",
  });
});

router.use("/news", news);
router.use("/about", about);
router.use("/contact", contact);
router.use("/user", user);

module.exports = router;
