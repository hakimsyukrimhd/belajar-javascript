// Logic Challenge - Palindrome
// Problem
// Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.

// Code

function palindrome(kata) {
    let kataSebelumDibalik = kata;
    let kataSetelahDibalik = "";
    for(let i = kata.length - 1; i >= 0; i--){
        kataSetelahDibalik += kata[i];
    }
    
    if(kataSebelumDibalik === kataSetelahDibalik){
        return true;
    } else{
        return false;
    }

}
  
// TEST CASES
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('katak')); // true
