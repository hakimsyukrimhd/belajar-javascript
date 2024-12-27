// Mengenal Penggunaan Function
// Objectives
// Mampu memahami serta mengimplementasi penggunaan function pada JavaScript
// Directions
// Lanjutkan kode berikut ini hingga dapat menampilkan nilai / output yang diminta!



// Tugas 1
// Buatlah sebuah fungsi bernama shoutOut(), yang mengembalikan nilai berupa "Halo Function!", yang kemudian akan ditampilkan di console.

function shoutOut(){
    return "Halo Function!";
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console



// Tugas 2
// Buatlah sebuah fungsi bernama calculateMultiply(), yang mengembalikan nilai berupa hasil kali dari dua parameter yang dikirim.

function calculateMultiply(num1, num2){
    return num1 * num2
}

let num1 = 5;
let num2 = 6;

let hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30


// Tugas 3
// Buatlah sebuah fungsi bernama processSentence(), yang akan memproses seluruh parameter yang diinput menjadi satu kalimat berikut: "Nama saya [Name], umur saya [Age] tahun, alamat saya di [Address], dan saya punya hobby yaitu [hobby]!"

function processSentence(name, age, address, hobby){
    return `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${address}, dan saya punya hobby yaitu ${hobby}`;
}

const nama = "Agus";
const age = 30;
const address = "Jln. Malioboro, Yogjakarta";
const hobby = "gaming";

let fullSentence = processSentence(nama,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
