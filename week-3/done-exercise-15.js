// Logic Challenge - Mengelompokkan Hewan
// Problem
// Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

// Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

// maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

// Urutan hewan dalam array setiap pengelompokan huruf tidak penting.

// Code

function groupAnimals(animals) {

    let urutanHewan = [];
    let hasil = [];

    let hewanHurufAwalA = []
    let hewanHurufAwalB = []
    let hewanHurufAwalC = []
    let hewanHurufAwalD = []
    let hewanHurufAwalE = []
    let hewanHurufAwalF = []
    let hewanHurufAwalG = []
    let hewanHurufAwalH = []
    let hewanHurufAwalI = []
    let hewanHurufAwalJ = []
    let hewanHurufAwalK = []
    let hewanHurufAwalL = []
    let hewanHurufAwalM = []
    let hewanHurufAwalN = []
    let hewanHurufAwalO = []
    let hewanHurufAwalP = []
    let hewanHurufAwalQ = []
    let hewanHurufAwalR = []
    let hewanHurufAwalS = []
    let hewanHurufAwalT = []
    let hewanHurufAwalU = []
    let hewanHurufAwalV = []
    let hewanHurufAwalW = []
    let hewanHurufAwalX = []
    let hewanHurufAwalY = []
    let hewanHurufAwalZ = []
    
    for(let i = 0; i <= animals.length - 1; i++){
        // if(animals[i][0] === 'z'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'y'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'x'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'w'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'v'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'u'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 't'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 's'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'r'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'q'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'p'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'o'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'n'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'm'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'l'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'k'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'j'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'i'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'h'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'g'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'f'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'e'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'd'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'c'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'b'){
        //     urutanHewan.push(animals[i]);
        // }
        // if(animals[i][0] === 'a'){
        //     urutanHewan.unshift(animals[i]);
        // }




        if(animals[i][0] === 'a'){
            hewanHurufAwalA.push(animals[i]);
        }
        if(animals[i][0] === 'b'){
            hewanHurufAwalB.push(animals[i]);
        }
        if(animals[i][0] === 'c'){
            hewanHurufAwalC.push(animals[i]);
        }
        if(animals[i][0] === 'd'){
            hewanHurufAwalD.push(animals[i]);
        }
        if(animals[i][0] === 'e'){
            hewanHurufAwalE.push(animals[i]);
        }
        if(animals[i][0] === 'f'){
            hewanHurufAwalF.push(animals[i]);
        }
        if(animals[i][0] === 'g'){
            hewanHurufAwalG.push(animals[i]);
        }
        if(animals[i][0] === 'h'){
            hewanHurufAwalH.push(animals[i]);
        }
        if(animals[i][0] === 'i'){
            hewanHurufAwalI.push(animals[i]);
        }
        if(animals[i][0] === 'j'){
            hewanHurufAwalJ.push(animals[i]);
        }
        if(animals[i][0] === 'k'){
            hewanHurufAwalK.push(animals[i]);
        }
        if(animals[i][0] === 'l'){
            hewanHurufAwalL.push(animals[i]);
        }
        if(animals[i][0] === 'm'){
            hewanHurufAwalM.push(animals[i]);
        }
        if(animals[i][0] === 'n'){
            hewanHurufAwalN.push(animals[i]);
        }
        if(animals[i][0] === 'o'){
            hewanHurufAwalO.push(animals[i]);
        }
        if(animals[i][0] === 'p'){
            hewanHurufAwalP.push(animals[i]);
        }
        if(animals[i][0] === 'q'){
            hewanHurufAwalQ.push(animals[i]);
        }
        if(animals[i][0] === 'r'){
            hewanHurufAwalR.push(animals[i]);
        }
        if(animals[i][0] === 's'){
            hewanHurufAwalS.push(animals[i]);
        }
        if(animals[i][0] === 't'){
            hewanHurufAwalT.push(animals[i]);
        }
        if(animals[i][0] === 'u'){
            hewanHurufAwalU.push(animals[i]);
        }
        if(animals[i][0] === 'v'){
            hewanHurufAwalV.push(animals[i]);
        }
        if(animals[i][0] === 'w'){
            hewanHurufAwalW.push(animals[i]);
        }
        if(animals[i][0] === 'x'){
            hewanHurufAwalX.push(animals[i]);
        }
        if(animals[i][0] === 'y'){
            hewanHurufAwalY.push(animals[i]);
        }
        if(animals[i][0] === 'z'){
            hewanHurufAwalZ.push(animals[i]);
        }
    }

    urutanHewan.push(hewanHurufAwalA);
    urutanHewan.push(hewanHurufAwalB);
    urutanHewan.push(hewanHurufAwalC);
    urutanHewan.push(hewanHurufAwalD);
    urutanHewan.push(hewanHurufAwalE);
    urutanHewan.push(hewanHurufAwalF);
    urutanHewan.push(hewanHurufAwalG);
    urutanHewan.push(hewanHurufAwalH);
    urutanHewan.push(hewanHurufAwalI);
    urutanHewan.push(hewanHurufAwalJ);
    urutanHewan.push(hewanHurufAwalK);
    urutanHewan.push(hewanHurufAwalL);
    urutanHewan.push(hewanHurufAwalM);
    urutanHewan.push(hewanHurufAwalN);
    urutanHewan.push(hewanHurufAwalO);
    urutanHewan.push(hewanHurufAwalP);
    urutanHewan.push(hewanHurufAwalQ);
    urutanHewan.push(hewanHurufAwalR);
    urutanHewan.push(hewanHurufAwalS);
    urutanHewan.push(hewanHurufAwalT);
    urutanHewan.push(hewanHurufAwalU);
    urutanHewan.push(hewanHurufAwalV);
    urutanHewan.push(hewanHurufAwalW);
    urutanHewan.push(hewanHurufAwalX);
    urutanHewan.push(hewanHurufAwalY);
    urutanHewan.push(hewanHurufAwalZ);


    // console.log(hewanHurufAwalZ)
    for(let i = 0; i <= urutanHewan.length - 1; i++){
        if(urutanHewan[i].length > 0){
            hasil.push(urutanHewan[i]);
        } 
    }

    return hasil;
}
    
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]