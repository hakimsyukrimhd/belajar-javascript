// Problem
// Diberikan sebuah function cariModus(arr) yang menerima sebuah array angka. Function akan me-return modus dari array atau deret angka tersebut. Modus adalah angka dari sebuah deret yang paling banyak atau paling sering muncul. Contoh, modus dari [10, 4, 5, 2, 4] adalah 4. Jika modus tidak ditemukan, function akan me-return -1. Apabila ditemukan lebih dari dua nilai modus, tampilkan nilai modus yang paling pertama muncul (dihitung dari kiri ke kanan). Dan apabila dialam modus hanya ada 1 nilai yang sama maka function akan me-return -1, Contohnya [1, 1, 1] adalah -1.

// Code
function cariModus(arr) {
    arr.sort((a, b) => a - b); // Mengurutkan array
    let maxCount = 0; // Menyimpan jumlah kemunculan maksimum
    let modus = -1; // Menyimpan modus, default -1 jika tidak ditemukan
    let currentCount = 1; // Menghitung kemunculan angka saat ini
    let allSame = true; // Untuk memeriksa jika semua elemen sama

    // Loop mulai dari angka kedua
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) { // Jika angka sama dengan sebelumnya
            currentCount++; // Tambahkan hitungan
        } else {
            allSame = false; // Set bahwa tidak semua elemen sama
            if (currentCount > maxCount) { // Jika hitungan lebih besar dari maxCount
                maxCount = currentCount; // Update maxCount
                modus = arr[i - 1]; // Update modus
            }
            currentCount = 1; // Reset hitungan untuk angka baru
        }
    }

    // Cek angka terakhir
    if (currentCount > maxCount) {
        maxCount = currentCount;
        modus = arr[arr.length - 1];
    }

    // Kondisi jika semua angka sama atau tidak ada modus
    if (maxCount === 1 || allSame) {
        return -1;
    }

    return modus;
}
// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1