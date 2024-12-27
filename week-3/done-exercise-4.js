// // Menggunakan Built-in Function pada Array
// // Array pada JavaScript memiliki sekumpulan built-in function yang digunakan untuk mempermudah developer untuk mengolah data di dalamnya. Beberapa fungsi yang sering digunakan antara lain join, split, slice, splice, dan sort. Kerjakanlah tantangan ini untuk memperkuat pengertian kamu tentang built-in function tersebut.

// // Objectives
// // Mengerti Kegunaan dari Built-in Function yang dimiliki Array
// // Mampu Menggunakan Built-in Function yang dimiliki Array
// // Directions

// //contoh output
// ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  
// Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

let input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(arr){
    // Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.
    
    // ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  
    let array = arr;
    array.splice(1, 4, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989","Pria", "SMA Internasional Metro");
    
    console.log(array);
    // Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
    
    // Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
    // Format tanggal pada data adalah dd-mm-YYYY
    // Misal angka bulan 01, tuliskan "Januari"
    // Gunakan switch case untuk menuliskan bulan di atas.


    let tanggal = array[3].split("/");

    let bulan = tanggal[1];

    switch(bulan){
        case "01":
            console.log("Januari");
            break;
        case "02":
            console.log("Februari");
            break;
        case "03":
            console.log("Maret");
            break;
        case "04":
            console.log("April");
            break;
        case "05":
            console.log("Mei");
            break;
        case "06":
            console.log("Juni");
            break;
        case "07":
            console.log("Juli");
            break;
        case "08":
            console.log("Agustus");
            break;
        case "09":
            console.log("September");
            break;
        case "10":
            console.log("Oktober");
            break;
        case "11":
            console.log("November");
            break;
        case "12":
            console.log("Desember");
            break;
        default:
            console.log("Tidak ada bulan itu bos~");
            break;
    }
    // Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.
    let sortTanggal = tanggal.sort(function(a, b){return b - a }); 
 
    console.log(sortTanggal);

    // Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

    let tanggal1 = array[3].split("/");
    let joinTanggal = tanggal1.join("-");
    console.log(joinTanggal);

    // Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

    let nama = array[1];
    let sliceNama = nama.slice(0, 14);

    console.log(sliceNama);

}

dataHandling2(input);




// Test-case
// Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

// var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
// dataHandling2(input);

// /**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah
//  */

