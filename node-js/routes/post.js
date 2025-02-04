const router = require("express").Router();

router.post("/", (req, res) => {
  const body = req.body;

  const lengthBody = (obj) => {
    return Object.keys(obj).length;
  };

  // console.log(lengthBody(body));

  if (lengthBody(body) === 0) {
    res.status(200).json({
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
        res.status(200).json({
          message: "Data berhasil ditambahkan!",
        });
      }
    });
  });

  // buat pengecekan jika user mengirimkan body hanya string kosong, beri res bad req dan kirim massage: apapun
});

module.exports = router;
