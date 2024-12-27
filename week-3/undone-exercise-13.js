// Logic Challenge - Target Terdekat
// Problem
// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.

// Code

function targetTerdekat(arr) {
    let alphabet = arr;

    let jarak = 0;
    let posisio = [];
    let posisix = [];

    for(let i = 0; i <= alphabet.length - 1; i++){


        // if(alphabet[i] !== 'x' && alphabet[i] !== 'o'){

        // }


        if(alphabet[i] === 'o'){
            posisio += i;
        }
        if(alphabet[i] === 'x'){
            posisix += i;
        }
    }

    console.log(posisio)
    console.log(posisix)
    
    if(posisio[0] > posisix[0]){
        jarak = posisio[0] - posisix[0]
    } else{
        jarak = posisix[0] - posisio[0]
    }

    return jarak;
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2