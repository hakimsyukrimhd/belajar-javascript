// Logic Challenge - Tukar Besar Kecil
// Problem
// Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.

// Code

function tukarBesarKecil(kalimat) {
    const hurufKecil = "abcdefghijklmnopqrstuvwxyz";
    const hurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let hasil = '';

    for(let i = 0; i <= kalimat.length - 1; i++){
        let isHuruf = false;

        for(let j = 0; j <= hurufBesar.length - 1; j++){
            if(kalimat[i] === hurufBesar[j]){
                hasil += hurufKecil[j];
                isHuruf = true;
                break;
            }
        }
    
        if(!isHuruf){
            for (let j = 0; j <= hurufKecil.length - 1; j++) {
                if (kalimat[i] === hurufKecil[j]) {
                    hasil += hurufBesar[j];
                    isHuruf = true;
                    break;
                }
            }   
        }

        if(!isHuruf){
            hasil += kalimat[i]
        }
    
    }

    return hasil;

   
    
}
// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"