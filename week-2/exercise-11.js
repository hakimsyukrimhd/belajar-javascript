// Logic Challenge - Balik Kata
// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string. Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

// Code

function balikKata(kata) {
    // let splitString = kata.split(""); // ini pertama kita pisahkan dia berdasarkan spasi dan berbentuk array
    // let reverseArray = splitString.reverse(); // setelah kata- nya dipisahkan, dibalikkan setiap kata tadi (hanya bisa dilakukan pada array)
    // let joinArray = reverseArray.join(""); // dan terakhir digabungkan lagi dengan join (array juga)

    // // METHOD DI ATAS ADALAH METHOD YANG DIGUNAKAN UNTUK ARRAY.
    // return joinArray;

    // YANG DIBAWAH INI CARA MANUAL

    let pecahanKata = "";
    // pertama telusuri dulu, tapi dari yang paling besar, jadi yang paling besar adalah length (jumlah) dari kata itu.
    // setelah itu kondisi berhenti-nya adalah ketiak i >= 0, karena index pasti sampai 0
    // setelah itu baru i dikurangi
    for(let i = kata.length - 1; i >= 0; i--){
        // setelah dapat, lalu dimasukkan ke dalam variabel baru yang menampung kata ke[i] secara terbalik, kenapa bisa terbalik, karena kita inisialisasi i diawal dengan length dan menurun.
        pecahanKata += kata[i];
    }
    return pecahanKata;
}

// INI KIM GA TAU CARANYA BANG, JADI LIAT DOKUMENTASI ORANG LAIN DI GOOGLE, TAPI CARA KERJA DARI MASING-MASING METHOD KIM LUMAYAN PAHAM
  
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS
console.log(balikKata('John Doe')); // eoD nhoJ