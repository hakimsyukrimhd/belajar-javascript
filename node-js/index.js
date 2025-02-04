const express = require("express");
const app = express();
const PORT = 3000;
const homepage = require("./routes/homepage");

// Ini middleware
// middleware juga bisa untuk otentikasi, misal apakah orang sudah login atau belum, otorisasi, apakah dia orang yang diizinkan untuk melakukan sesuatu
app.use(express.json());

app.use((req, res, next) => {
  const date = new Date();
  console.log("LOGGED");
  console.log(`Time :`, date);
  next();
});

app.use("/", homepage);

app.listen(PORT, () => {
  console.log("Aplikasi running di PORT", PORT);
});
