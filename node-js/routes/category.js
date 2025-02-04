const router = require("express").Router();
const newsData = require("../data.json");

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Ini adalah halaman category",
  });
});

router.get("/:title", (req, res) => {
  const newsQuery = req.query.title;
  const newsParam = req.params.category;

  if (newsQuery) {
    let newsItem = newsData.filter((news) => {
      return news.title.toLowerCase().includes(newsQuery.toLowerCase());
    });

    if (newsItem.length === 0) {
      res.status(404).json({
        message: "Berita tidak ditemukan!",
      });
    }
    res.status(200).json(newsItem);
  } else {
    let newsItem2 = newsData.filter((news) => {
      return news.title === newsParam;
    });
    if (newsItem2.length === 0) {
      res.status(404).json({
        message: "Berita tidak ditemukan!",
      });
    }
    res.status(200).json(newsItem2);
  }
});
module.exports = router;
