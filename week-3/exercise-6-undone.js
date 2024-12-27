// Logic Challenge - Number Palindrome
// Problem
// Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

// Code

function angkaPalindrome(num) {
    // untuk menentukan angka palindrom, kita harus tau dulu, jika dia dibalik sama, maka dia palindrom

    let angkaPertama = [];
    let angkaKedua;

    for(let i = 0 + 1; i <= 10000; i++){
        angkaPertama.push(i);
    }

    
}
  
// TEST CASES
console.log(angkaPalindrome()); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001
