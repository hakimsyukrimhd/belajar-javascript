// Looping
// Soal looping - asterisk ini memiliki 3 nomor.

// 1. Menyusun Barisan Bintang
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki 1 simbol '*'.

// Skeleton Code
let rows1 = 5 ; // input the number of rows

// do loops to display asterisks in the console.
for(let i = 0 ; i < rows1; i++){
    console.log("*");
}

// Output
// jika rows1 = 5

// *
// *
// *
// *
// *





// 2. Menyusun Barisan Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang). Setiap baris memiliki jumlah simbol '*' sesuai dengan jumlah baris. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

// Skeleton Code
let rows2 = 5; // input the number of rows
// // do loops to display asterisks in the console.
for(let i = 0; i < rows2; i++ ){
    let baris = "";
    for(let a = 0; a < rows2; a++){
        baris += "*"; // disini prosesnyo baru mambuek satu baris bintang *****, dan proses iko ndak akan berhenti sampai 25 kali, nah karena wak ndak ingin seperti itu, diberi lah baris baru setelah 5 kali iterasi
    }
    baris += "\n"; // disini terjadinya, setelah loop selesai ketika a < rows2 (yang isinya 5) dan inner loopnya selesai, maka terjadilah \n yang kemudian mencetak baris baru. begitu lagi berulang
}
console.log(baris); // setelah semua barisnya (rows2 = 5 ) selesai, baru kita cetak ke console.log



// Output
// jika rows2 = 5

// *****
// *****
// *****
// *****
// *****






// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript untuk menampilkan di console barisan asterisks (bintang) dalam bentuk tangga. Setiap baris memiliki jumlah simbol '*' sesuai dengan nomor baris. Baris pertama, hanya ada satu bintang. Baris kedua, dua bintang, baris ketiga tiga bintang, dan seterusnya. Manfaatkan nested loop atau loop di dalam loop untuk menyelesaikan kasus ini.

// Skeleton Code
let rows3 = 5; // input the number of rows
let baris3 = "";

// do loops to display asterisks in the console.
for(let i = 0; i < rows3; i++){
    baris3 += "*"
    console.log(baris3);
}

// LEBIH MUDAH SOAL NOMOR 3 DARIPADA NOMOR 2 AHAHHAH

// Output
// jika rows3 = 5

// *
// **
// ***
// ****
// *****
