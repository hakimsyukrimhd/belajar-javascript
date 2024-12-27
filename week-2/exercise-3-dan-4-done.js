// LATIHAN 3 IF-ELSE

// Objective
// Mengerti Cara Menggunakan If-Else
// Mengerti Logika If-Else
// Mengerti Cara Menggunakan Operator Evaluasi ===, !==

// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya. Untuk memulai game itu diperlukan 2 variabel (untuk sekarang), yaitu nama dan peran. Variabel peran harus memiliki isi data, bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game". Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir. Tugas Anda adalah untuk membuat program yang mengecek isi variabel peran serta mengeluarkan respon sesuai isi variabel tersebut.

// Hints
// Variabel tetap di-input secara manual.
// Variabel nama dan peran dapat diisi apa saja.
// Nama tidak perlu dicek sama persis seperti contoh input/output
// Buat If-Else berbeda masing-masing untuk mengecek peran

let nama;
let peran;

nama = "Hakim";
peran = "Tabib";

if(nama === undefined){
    console.log(`Nama harus diisi!`);
} else{
    console.log(`Selamat datang ${nama}, pilih peranmu untuk memulai game.`);  

    if(peran === "Kesatria"){
        console.log(`Selamat datang di Dunia Proxytia, ${nama}. \nHalo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`);
    } else if(peran === "Tabib"){
        console.log(`Selamat datang di Dunia Proxytia, ${nama}. \nHalo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`);
    } else if(peran === "Penyihir"){
        console.log(`Selamat datang di Dunia Proxytia, ${nama}. \nHalo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    }
}

// LATIHAN 4 SWITCH 
// Objectives
// Mengerti Cara Menggunakan Switch-Case
// Mengerti Logika Switch-Case
// Directions
// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// var hari = 21; var bulan = 1; var tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

// Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi

let tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
let bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
let tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

tanggal = 10;
bulan = 38;
tahun = 2020;


switch(bulan){
    case 1:
        console.log(`Sekarang tanggal ${tanggal} Januari ${tahun}.`);
    break;
    case 2:
        console.log(`Sekarang tanggal ${tanggal} Februari ${tahun}.`);
    break;
    case 3:
        console.log(`Sekarang tanggal ${tanggal} Maret ${tahun}.`);
    break;
    case 4:
        console.log(`Sekarang tanggal ${tanggal} April ${tahun}.`);
    break;
    case 5:
        console.log(`Sekarang tanggal ${tanggal} Mei ${tahun}.`);
    break;
    case 6:
        console.log(`Sekarang tanggal ${tanggal} Juni ${tahun}.`);
    break;
    case 7:
        console.log(`Sekarang tanggal ${tanggal} Juli ${tahun}.`);
    break;
    case 8:
        console.log(`Sekarang tanggal ${tanggal} Agustus ${tahun}.`);
    break;
    case 9:
        console.log(`Sekarang tanggal ${tanggal} September ${tahun}.`);
    break;
    case 10:
        console.log(`Sekarang tanggal ${tanggal} Oktober ${tahun}.`);
    break;
    case 11:
        console.log(`Sekarang tanggal ${tanggal} November ${tahun}.`);
    break;
    case 12:
        console.log(`Sekarang tanggal ${tanggal} Desember ${tahun}.`);
    break;
    default:
        console.log(`Itu tidak ada dalam penanggalan.`)
    break;
}





