// 1. Let's Form a Sentence
// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +. Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

// Skeleton Code
let word = 'JavaScript ';
let second = 'is ';
let third = 'awesome ';
let fourth = 'and ';
let fifth = 'I ';
let sixth = 'love ';
let seventh = 'it!';
// Output
// JavaScript is awesome and I love it!
let hasil = word + second + third + fourth + fifth + sixth + seventh;
console.log(hasil);

/* COMMENT = spasi-nyo kim ciptakan dari var langsung bg */
// TUGAS NOMOR 1 INI MEMERINTAHKAN UNTUK MENGGABUNGKAN KATA MENJADI KALIMAT





// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya. Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata. Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata tersebut!

// Skeleton Code
let word2 = 'wow JavaScript is so cool';
let exampleFirstWord = word2[0] + word2[1] + word2[2];
let secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13] // do your own; 
let thirdWord = word2[15] + word2[16] // do your own; 
let fourthWord = word2[18] + word2[19] // do your own; 
let fifthWord = word2[21] + word2[22] + word2[23] + word2 [24] // do your own; 

console.log('First Word: ' + exampleFirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word: ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word: ' + fifthWord);
// Output
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool

// TUGAS NOMOR 2 INI ADALAH MEMECAH KALIMAT MENJADI KATA TAPI HARUS DIGABUNGKAN HURUF PER HURUF








// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

// Skeleton Code
let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);
let secondWord3 = word3.substring(4, 14) // do your own; 
let thirdWord3 = word3.substring(15, 17) // do your own; 
let fourthWord3 = word3.substring(18, 20) // do your own; 
let fifthWord3 = word3.substring(21, 25) // do your own; 

console.log('First Word: ' + exampleFirstWord3);
console.log('Second Word: ' + secondWord3);
console.log('Third Word: ' + thirdWord3);
console.log('Fourth Word: ' + fourthWord3);
console.log('Fifth Word: ' + fifthWord3);
// Output
// First Word: wow
// Second Word: JavaScript
// Third Word: is
// Fourth Word: so
// Fifth Word: cool


// TUGAS NOMOR 3 INI SAMA DENGAN YANG NOMOR 2 TAPI MENGGUNAKAN FUNCTION SUBSTRING YANG MANA ANGKA PERTAMA ADALAH INDEX AWAL DARI KATA YANG INGIN DITUJU DAN ANGKA KEDUA ADALAH INDEX TERAKHIR DARI KATA ITU.






// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

// Skeleton Code
// Buatlah variable-variable baru untuk menyimpan panjang string, dan ubah console dibawah untuk menampilkan nya.

let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);
let secondWord4 = word4.substring(4, 14); // do your own!
let thirdWord4 = word4.substring(15, 17); // do your own!
let fourthWord4 = word4.substring(18, 20); // do your own!    
let fifthWord4 = word4.substring(21, 25); // do your own!

let firstWordLength = exampleFirstWord4.length;
// create new variables around here
let secondWordLength = secondWord4.length;
let thirdWordLength = thirdWord4.length;
let fourthWordLength = fourthWord4.length;
let fifthWordLength = fifthWord4.length;

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord4 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + thirdWord4 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourthWord4 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifthWord4 + ', with length: ' + fifthWordLength);

// Output
// First Word: wow, with length: 3
// Second Word: JavaScript, with length: 10
// Third Word: is, with length: 2
// Fourth Word: so, with length: 2
// Fifth Word: cool, with length: 4


// SOAL NOMOR 4 INI MIRIP DENGAN NOMOR 3, TAPI DITAMBAHKAN BERAPA PANJANG KATA-NYA