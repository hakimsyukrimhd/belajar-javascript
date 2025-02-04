const router = require("express").Router();
const news = require("./news");
const about = require("./about");
const contact = require("./contact");
const post = require("./post");
const deleteNews = require("./delete");

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Selamat datang di Homepage",
  });
});

router.use("/news", news);
router.use("/about", about);
router.use("/contact", contact);
router.use("/post", post);
router.use("/delete", deleteNews);

module.exports = router;
