const router = require("express").Router();
const newsData = require("../data.json");
const fs = require("fs");

router.get("/", (req, res) => {
  res.status(200).json({
    massage: "Ini adalah halaman user configuration",
  });
});

router.post("/", (req, res) => {
  const body = req.body;

  const lengthBody = (obj) => {
    return Object.keys(obj).length;
  };

  //   console.log(lengthBody(body));

  if (lengthBody(body) === 0) {
    res.status(404).json({
      massage: "Invalid. Masukkan data yang benar!",
    });
    return;
  }

  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const arrBerita = JSON.parse(data); // json parse ini untuk mengubah json menjadi objek, sedangkan stringify itu untuk mengubah objek menjadi json
    arrBerita.unshift(body);

    fs.writeFile("data.json", JSON.stringify(arrBerita), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Seorang user menambahkan data");
        res.status(200).json({
          message: "Data berhasil ditambahkan!",
        });
      }
    });
  });

  // buat pengecekan jika user mengirimkan body hanya string kosong, beri res bad req dan kirim massage: apapun
});



router.delete("/:title", (req, res) => {
  const newsParam = req.params.title;
  let newsItem = newsData.filter((news) => {
    return news.title === newsParam;
  });
  if (newsItem.length === 0) {
    res.status(404).json({
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
      return news.title !== newsParam;
    });

    fs.writeFile("data.json", JSON.stringify(finalBerita), (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log("Seorang user menghapus data");
        res.status(200).json({
          message: "Data berhasil dihapus!",
        });
      }
    });
  });
});

module.exports = router;
