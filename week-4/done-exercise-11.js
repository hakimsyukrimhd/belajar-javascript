// Logic Challenge - Shopping Time!
// Problem
// Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

// Sepatu brand Stacattu seharga 1500000
// Baju brand Zoro seharga 500000
// Baju brand H&N seharga 250000
// Sweater brand Uniklooh seharga 175000
// Casing Handphone seharga 50000
// Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

// Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
// Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup"
// Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
// Contoh jika inputan memberId: '324193hDew2' dan money: 700000

// maka output:

// { memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }

// Code

function shoppingTime(memberId, money) {
    const sepatuBrandStacattu = 1500000;
    const bajuBrandZoro = 500000;
    const bajuBrandHdanN = 250000;
    const sweaterBrandUnikloh = 175000;
    const casingHandphone = 50000;
    const allOfTheItems = [sepatuBrandStacattu, bajuBrandZoro, bajuBrandHdanN, sweaterBrandUnikloh, casingHandphone];


    if(memberId === '' || memberId === undefined){
        return `Mohon maaf, toko X hanya berlaku untuk member saja`
    }
    if(money < casingHandphone){
        return `Mohon maaf, uang tidak cukup`
    }

    
    if(money > casingHandphone){

        let user = {
            nomorID: memberId,
            uang: money,
            listPurchased: [],
            changeMoney: money,
        };
       
        for(let i = 0; i <= allOfTheItems.length - 1; i++){
            if(money > allOfTheItems[i]){
                user.listPurchased.push(allOfTheItems[i])
                user.changeMoney -= allOfTheItems[i];
            }
        }


        for(let i = 0; i <= user.listPurchased.length - 1; i++){
            if(user.listPurchased[i] === 1500000){
                user.listPurchased[i] = "Sepatu Stacattu"
            }
            if(user.listPurchased[i] === 500000){
                user.listPurchased[i] = "Baju Zoro"
            }
            if(user.listPurchased[i] === 250000){
                user.listPurchased[i] = "Baju H&N"
            }
            if(user.listPurchased[i] === 175000){
                user.listPurchased[i] = "Sweater Uniklooh"
            }
            if(user.listPurchased[i] === 50000){
                user.listPurchased[i] = "Casing Handphone"
            }

        }

        return user;
    }

}
    
// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
//{ memberId: '1820RzKrnWn08',
// money: 2475000,
// listPurchased:
//  [ 'Sepatu Stacattu',
//    'Baju Zoro',
//    'Baju H&N',
//    'Sweater Uniklooh',
//    'Casing Handphone' ],
// changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja