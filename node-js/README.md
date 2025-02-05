# Tutorial Menggunakan Aplikasi ini

File ini dibuat dengan tujuan agar user bisa menggunakan aplikasi ini dengan cara yang benar sesuai apa yang diinginkan oleh user.

1. Pertama jalankan dulu file index di terminal, setelah itu lanjut ke tutorial berikutnya
2. Untuk mengarah ke HomePage, tuliskan `http:localhost:3000` di thundercloud dengan method **GET**
3. Dari Homepage, user memiliki 5 pilihan URL :
   1. News, ketikkan `http:localhost:3000/news` dan ini akan menuju ke halaman news yang akan menampilkan semua news di databese, lalu dari sini kita juga memiliki cabang selanjutnya:
      1. Category, dengan mengetik `http:localhost:3000/news/category`, akan membuka halaman category, disiini, user bisa mencari judul berita dengan dua cara:
         a. Mencari judul menggunakan judul spesifik, dengan cara ketik `http:localhost:3000/news/category/(judul yang dicari harus lengkap)`
         b. Mencari judul dengan mencari keyword, dengan cara ketik `http:localhost:3000/news/category/title?title=(keyword)`
   2. About, ketikkan `http:localhost:3000/about` dan ini akan menuju ke halaman about
   3. Contact, ketikkan `http:localhost:3000/contact` dan ini akan menuju ke halaman contact
   4. User, ketikka `http:localhost:3000/user` dan ini akan menuju ke halaman user, disini user bisa melakukan berbagai hal seperti put, post, delete dengan cara menuju ke halaman configuration, dengan ketik `http:localhost:3000/user/config`:
      1. Post, di link `http:localhost:3000/user/config` user bisa menambahkan data dengan cara ubah dulu ke method **POST**, lalu di requet body dituliskan data yang ingin ditambahkan, jika datanya benar (JSON), akan tampil di window keterangan bahwa data sudah di tambahkan.
      2. Delete, di link `http:localhost:3000/user/config` user juga bisa melakukan penghapusan data dengan cara ubah dulu ke method **DELETE**, lalu ketikkan `http:localhost:3000/user/config/(judul yang ingin dihapus secara spesifik)`, jika benar maka akan muncul keterangan data sudah di hapus di window.
      3. Put, di link `http:localhost:3000/user/config` user juga bisa melakukan update data secara keseluruhan, dengan cara ubah dulu ke method **PUT**, lalu `http:localhost:3000/user/config/(judul yang ingin dihapus secara spesifik)`, kemudian di request body silakan masukkan data baru yang akan dikirim dalam format JSON, jika datanya benar, maka akan tampil dilayar bahwa data sudah di perbarui. namun jika user hanya ingin merubah data spesifik seperti hanya penulis atau hanya judulnya saja, lakukan tutorial dibawah ini
      4. Patch, di link `http:localhost:3000/user/config`, silakan ubah dulu method ke **PATCH**, lalu ketikkan `http:localhost:3000/user/config/(judul yang ingin dihapus secara spesifik)`, kemudian di requeset body ketikkan bagian mana yang mau diubah, jika berhasil akan tampil pemberitahuan berhasil ke layar
