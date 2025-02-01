// Logic Challenge - Angka Prima
// Problem
// Diberikan sebuah function angkaPrima(angka) yang menerima satu parameter berupa angka. Function akan me-return true jika angka tersebut adalah bilangan prima. Jika tidak, return false.

// Code

function angkaPrima(angka) {
    if(angka === 2 ){
        return true;
    } 
    if(angka === 3 ){
        return true;
    } 
    if(angka % 2 !== 0 && angka % 3 !== 0){
        return true
    }else{
        return false;
    }
    
}
// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false