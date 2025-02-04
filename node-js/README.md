# Tutorial Menggunakan Aplikasi ini

File ini dibuat dengan tujuan agar user bisa menggunakan aplikasi ini dengan cara yang benar sesuai apa yang diinginkan oleh user.

1. Pertama jalankan dulu file index di terminal, setelah itu lanjut ke tutorial berikutnya
2. Untuk mengarah ke HomePage, tuliskan `htttp:localhost:3000` di thundercloud dengan method **GET**
3. Dari Homepage, user memiliki 5 pilihan URL :
   1. News, ketikkan `htttp:localhost:3000/news` dan ini akan menuju ke halaman news yang akan menampilkan semua news di databese
   2. About, ketikkan `htttp:localhost:3000/about` dan ini akan menuju ke halaman about
   3. Contact, ketikkan `htttp:localhost:3000/contact` dan ini akan menuju ke halaman contact
   4. Post, pilih method **POST** `htttp:localhost:3000/post` dan ini akan menuju ke halaman post dan disini user bisa menambahkan data sesuai format yang sudah ditentukan dalam request body(JSON)
   5. Delete, pilih method **DELETE** `htttp:localhost:3000/delete` dan ini akan menuju ke halaman delete dan disini user bisa menghapus data yang diinginkan sesuai judul, contoh `htttp:localhost:3000/delete/Meta Bikin Aplikasi Edit Video Namanya Edits, Mau Saingi CapCut`
