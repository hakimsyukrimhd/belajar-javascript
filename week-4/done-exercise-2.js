// Logic Challenge - Faktor Persekutuan Terbesar
// Problem
// Diberikan sebuah function fpb(angka1, angka2) yang menerima dua parameter angka. Function akan mengembalikan nilai FPB (Faktor Persekutuan Terbesar). FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang dapat membagi habis kedua bilangan tersebut.

// Code
function fpb(angka1, angka2) {
    const number1Factorization = [];
    for(let i = 0; i <= angka1; i++){
        if(angka1 % i === 0){
            number1Factorization.push(i);
        }
    }

    const number2Factorization = [];
    for(let i = 0; i <= angka2; i++){
        if(angka2 % i === 0){
            number2Factorization.push(i);
        }
    }

    let sameNumber;
    for(let i = 0; i <= number1Factorization.length - 1; i++){
        for(let x = 0; x <= number2Factorization.length - 1; x++){
            if(number1Factorization[i] === number2Factorization[x]){
                sameNumber = (number1Factorization[i]);
            }

        }
    }

    // const result = sameNumber.slice(sameNumber.length - 1)
    return sameNumber;
    
}
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1