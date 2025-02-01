// Logic Challenge - Change Me!
// Problem
// Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year . Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

// Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]] maka output:

// Platinum Fox: { firstName: 'Platinum', lastName: 'Fox', gender: 'female', age: 23 }
// John Doe: { firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }
// Code



function changeMe(arr) {

    const dataDiri = ['firstName', 'lastName', 'gender', 'birthYear'];

    for(let i = 0; i <= arr.length - 1; i++){
        let result = {};

        for(let j = 0; j <= arr[i].length - 1; j++){
            result[dataDiri[j]] = arr[i][j];
        }

        let currentYear = new Date().getFullYear();
        
        // Menentukan usia atau 'Invalid Birth Year'
        if (result.birthYear < currentYear) {
            result.age = currentYear - result.birthYear;
        } else {
            result.age = "Invalid Birth Year"
        }

        console.log(`${i + 1}. ${result.firstName} ${result.lastName}: {firstName: ${result.firstName}, lastName: ${result.lastName}, gender: ${result.gender}, age: ${result.age}}`);

    }
}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""