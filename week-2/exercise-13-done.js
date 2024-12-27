// Logic Challenge - X dan O
// Problem
// Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

// Code

function xo(str) {
    // step by step
    // telusuri stringnya untuk mengecek isinya
    let hurufO = "";
    let hurufX = "";
    for(i = 0; i < str.length; i++){
        // jika isi dari string itu ada huruf o, maka simpan huruf o ke dalam variabel
        if(str[i] === "o"){
            hurufO += str[i];
        // jika isi string itu ada huruf x, maka siimpan huruf x ke dalam yang variabel yang berbeda
        }else if(str[i] === "x"){
            hurufX += str[i];
        }
    }
    
    if(hurufO.length === hurufX.length){
        return true;
    } else{
        return false;
    }

    // setelah itu, bandingkan jumlah car o dan x,
}
  
// TEST CASES
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
console.log(xo('xoxoxo')); // true
