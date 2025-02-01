const express = require("express");
const app = express();
const dataBerita = require("./data");
const fs = require("fs");
const PORT = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  response.status(200).json(dataBerita);
});

app.get("/berita/:title", (request, response) => {
  const newsTitle = request.params.title;
  let newsItem = dataBerita.filter((news) => {
    return news.title === newsTitle;
  });
  if (newsItem.length === 0) {
    response.status(404).json({
      message: "Berita tidak ditemukan!",
    });
  }
  response.status(200).json(newsItem);
});

app.post("/", (request, response) => {
  const body = request.body;

  const lengthBody = (obj) => {
    return Object.keys(obj).length;
  };

  // console.log(lengthBody(body));

  if (lengthBody(body) === 0) {
    response.status(200).json({
      massage: "Invalid. Masukkan data yang benar!",
    });
    return;
  }

  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const arrBerita = JSON.parse(data);
    arrBerita.unshift(body);

    fs.writeFile("data.json", JSON.stringify(arrBerita), (err) => {
      if (err) {
        console.error(err);
      } else {
        response.status(200).json({
          message: "Data berhasil ditambahkan!",
        });
      }
    });
  });

  // buat pengecekan jika user mengirimkan body hanya string kosong, beri response bad request dan kirim massage: apapun
});

app.delete("/berita/:title", (request, response) => {
  // response adalah 200 dan data berkurang/ judul tersebut tidak ada di data
  const newsTitle = request.params.title;
  let newsItem = dataBerita.filter((news) => {
    return news.title === newsTitle;
  });
  if (newsItem.length === 0) {
    response.status(200).json({
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
        response.status(200).json({
          message: "Data berhasil dihapus!",
        });
      }
    });
  });
});

app.use("/", (request, response) => {
  response.status(404);
  response.send("Halaman tidak ditemukan");
});

app.listen(PORT, () => {
  console.log("Aplikasi running di PORT", PORT);
});

// {
//   "title": "Jadwal Acara TV ANTV Hari Ini 29 Januari 2025, Panduan untuk Menonton",
//   "image": "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01jjqng9b9js4dp65rfdtj9xea.jpg",
//   "body": "PT Cakrawala Andalas Televisi atau yang lebih dikenal dengan sebutan ANTV hadir sebagai stasiun televisi swasta di Indonesia yang menyajikan beragam tayangan hiburan berkualitas, menarik serta menambah wawasan dan pengetahuan masyarakat Indonesia. Awal mula izin ANTV adalah siaran lokal di Bandar Lampung pada tanggal 1 Januari 1993. Lalu, dua bulan kemudian tepatnya di tanggal 1 Maret 1993, ANTV secara resmi mengudara di siaran nasional. Adapun kepemilikan ANTV oleh Intermedia Capital (MDIA), perusahaan yang di bawah naungan Visi Media Asia (VIVA) milik Bakrie Group.",
//   "data": "29 Januari 2025",
//   "penulis": "Agung"
// }

// {
//   "title": "Eks Menteri ATRBPN Hadi Tjahjanto Buka Suara soal SHGB Pagar Laut Tangerang",
//   "image": "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01j1shghvhygy778tdc0qgvhgj.jpg",
//   "body": "Pagar laut yang membentang sepanjang 30 Km di atas laut Tangerang menuai polemik. Terlebih, sejak terungkap pagar laut itu memilik Sertifikat Hak Guna Bangunan (SHGB). Menko Infrastruktur dan Pembangunan Kewilayahan, Agus Harimurti Yudhoyono (AHY), mengungkapkan SHGB pagar laut yang ramai diperbincangkan sudah ada sejak 2023. AHY menjabat Menteri ATR/BPN pada 21 Februari 2024. Sementara Menteri ATR/BPN pada 2023 adalah Marsekal (Purn) Hadi Tjahjanto. Hadi memberikan penjelasan terkait SHGB pagar laut di Tangerang. Ia mengaku baru mengetahui masalah ini dari pemberitaan. Saya baru mengetahui berita ini dan mengikuti perkembangannya melalui media. Saya pikir kita harus menghormati langkah-langkah yang sedang dilakukan oleh Kementerian ATR/BPN dalam rangka memberikan klarifikasi, kata Hadi ketika dikonfirmasi, Selasa (21/1).Eks KSAU ini menyebut, langkah Kementerian ATR/BPN yang kini dipimpin Nusron Wahid sudah benar melakukan penelusuran terkait penerbitan SHGB itu. Salah satunya kalau tidak salah, akan melakukan penelitian ke Kantor Pertanahan setempat apakah prosedur penerbitan hak yang dilakukan oleh Kantor Pertanahan sudah sesuai dengan ketentuan atau tidak, ucap Hadi. Eks Panglima TNI ini sempat ditany apakah dirinya tahu soal SHGB pagar laut Tangerang yang terbit sejak 2023. Namun, ia menjawab diplomatis. Saya sudah bukan Menteri lagi, seandainya saya mendapatkan permasalahan yang sama pada saat itu,, saya akan melakukan tindakan yang sama dengan yang dilakukan Menteri Nusron, kata Hadi. Melakukan penelitian ke kantor pertanahan setempat apakah prosedur penerbitan hak sudah sesuai dengan ketentuan, tutur dia. Sebelumnya AHY mengaku tidak mengetahui SHGB pagar laut Tangerang saat menjabat sebagai Menteri ATR. Ini sedang diinvestigasi, sedang diinvestigasi dan tentunya kita ingin mengetahui seperti apa duduk permasalahannya, kronologinya seperti apa, kata AHY di Kompleks Istana Kepresidenan. Menurut AHY, data awal menunjukkan HGB di Tangerang ini sudah disahkan sejak 2023. Ia menegaskan, segala sesuatu yang telah disahkan sebelumnya tetap berlaku. Namun tetap ada mekanisme evaluasi jika ditemukan adanya ketidaksesuaian. Kalau memang ternyata ada yang tidak sesuai, baik itu ada yang tidak sesuai atau cacat, baik prosedur maupun material, apalagi kalau ada cacat hukumnya, itu maka harus segera dievaluasi, bahkan dicabut apakah itu SHM atau SHGB, kata AHY.",
//   "data": "21 Januari 2025",
//   "penulis": "Fadjar Hadi"
// }
