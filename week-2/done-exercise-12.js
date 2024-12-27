// Logic Challenge - Konversi Menit
// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut. Contoh, jika menit adalah 63, maka function akan me-return "1:03".

// Code

function konversiMenit(menit) {

    // let jam = Math.floor(menit / 60); // math.floor untuk memperkecil angka desimal ke bawah
    // let minute = menit % 60;    // mengambil sisa pembagian dari 60

    // minute = minute < 10 ? "0" + minute : minute; // nanya, jika minute kecil dari sepuluh, tambahkan 0, jika tidak ya tidak.
    // return ` ${jam}:${minute}`; // dicetak dalam bentuk string.

    // CARA MANUAL

    let jam = menit / 60;
    let jamDalamString = jam.toString();
    let jamAkhir = jamDalamString[0]

    let minute = menit % 60;
    if(minute < 10){
        minute = "0" + minute;
    }

    return `${jamAkhir}:${minute}`;
}
    
// INI JUGA KIM LIAT DOKUMENTASI GOOGLE BG, TAPI HABIS LIAT ITU PAHAM
// TEST CASES
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
console.log(konversiMenit(63)); // 1:03
