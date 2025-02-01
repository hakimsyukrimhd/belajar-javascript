// Logic Challenge - Naik Angkot
// Problem
// Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

// Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

// Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

// Code

function naikAngkot(arrPenumpang) {
    const rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    const data = ["penumpang", "naikDari", "tujuan", "bayar"];

    let result = []
    for(let i = 0; i <= arrPenumpang.length - 1 ; i++){
        let user = {};
        for(let j = 0; j <= arrPenumpang[i].length - 1; j++){
            user[data[j]] = arrPenumpang[i][j];
      
        }

        let indexNaikAngkot = 0;
        let indexTurunAngkot = 0;
        
        for(let i = 0; i <= rute.length - 1; i++){
            if(rute[i] === user.naikDari){
                indexNaikAngkot = i;
                break;
            }
        }

        for(let i = 0; i <= rute.length - 1; i++){
            if(rute[i] === user.tujuan){
                indexTurunAngkot = i;
                break;
            }
        }

        let biaya = (indexTurunAngkot - indexNaikAngkot) * 2000;

        user.bayar = biaya;

        result.push(user);

    }


    // for(let i = 0; i <= rute.length - 1; i++){
        
    // }

    return result;


}
    
//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]