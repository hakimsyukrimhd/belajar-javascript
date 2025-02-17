// Logic Challenge: Deep Sum
// Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array

// Contoh array:

[
    [
      [1, 2, 3],
      [1, 2, 3]
    ],
    [
      [1, 2, 3],
      [1, 2],
      [1]
    ]
]

// Maka akan menghasilkan output: 22

// Level kedalaman array akan di-asumsikan selalu 3, [ [ [ ] ] ], jika yang diberikan adalah array kosong maka kembalikan nilai 'No number'

function deepSum (arr) {

    if(arr.length === 0){
        return `No number`;
    } else{
       let result = 0;
    
       for(let i = 0; i <= arr.length - 1; i++){
        for(let j = 0; j <= arr[i].length - 1; j++){
            for(let k = 0; k <= arr[i][j].length - 1; k++){
                result += arr[i][j][k];
            }
        }
       }

       return result;

   
    }
    // return hasil;
}
    
//TEST CASE
console.log(deepSum([
    [
        [9, 1, 2, 10],
        [4, 5, 6],
        [9, 4, 3]
    ],
    [
        [4, 14, 31],
        [9, 10, 18, 12, 20],
        [1, 4, 90]
    ],
    [
        [3, 4, 5],
        [2, 4, 5, 10],
        [2, 5, 10],
    ]
])); // 316
    
console.log(deepSum([
    [
        [15],
        [1, 1],
        [20, 10],
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
        [2],
        [9, 11],
    ],
    [
        [1, 5, 3],
        [3, 5, 1],
        [1],
    ],
    [
        [2]
    ]
])); // 156

console.log(deepSum([])); // No number