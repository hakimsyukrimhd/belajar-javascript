const router = require("express").Router();

router.delete("/:title", (req, res) => {
  // res adalah 200 dan data berkurang/ judul tersebut tidak ada di data
  const newsTitle = req.params.title;
  let newsItem = dataBerita.filter((news) => {
    return news.title === newsTitle;
  });
  if (newsItem.length === 0) {
    res.status(200).json({
      massage: "Judul tersebut tidak ada!",
    });
  }

  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const arrBerita = JSON.parse(data);
    const finalBerita = arrBerita.filter((news) => {
      return news.title !== newsTitle;
    });
    fs.writeFile("data.json", JSON.stringify(finalBerita), (err) => {
      if (err) {
        console.error(err);
      } else {
        res.status(200).json({
          message: "Data berhasil dihapus!",
        });
      }
    });
  });
});

module.exports = router;
