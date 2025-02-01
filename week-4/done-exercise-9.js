// Logic Challenge - Check AB
// Problem
// Diberikan sebuah function checkAB(str) yang menerima satu parameter berupa string. function tersebut mengembalikan nilai true jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali. Jika tidak ditemukan sama sekali, kembalikan nilai false. Jarak bisa dari a ke b, atau b ke a.

// Code

function checkAB(num) {
    let hurufA = [];
    let hurufB = [];
 
    let result = false;

    for(let i = 0; i <= num.length - 1; i++){
        if(num[i] === 'a'){
            hurufA.push(i);
        }
        if(num[i] === 'b'){
            hurufB.push(i);
        }
    }

    for(let i = 0; i <= hurufA.length - 1; i++){
        for(let j = 0; j <= hurufB.length - 1; j++){
            let jarak = hurufA[i] - hurufB[j];
            if( jarak === 4 || jarak === -4){
                result = true;
            }

        }
    }

    return result;
}
    
// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false