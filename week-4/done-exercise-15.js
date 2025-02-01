// Logic Challenge: Highest Score
// Implementasikan function highestScore untuk mendapatkan student dengan nilai tertinggi dari setiap class:

// Output yang diharapkan berupa Object Literal dengan format sebagai berikut:


// {
//     <class>: { name: <name>, score: <score> },
//     <class>: { name: <name>, score: <score> },
//     <class>: { name: <name>, score: <score> }
// }

function highestScore (students) {
    let result = {};

    for (let i = 0; i < students.length; i++) {
        const student = students[i];
        const className = student.class;
        const studentScore = student.score;
        
        // Jika kelas belum ada di objek result, buat entri baru
        if (!result[className]) {
            result[className] = {
                name: student.name,
                score: studentScore
            };
        } else {
            // Jika kelas sudah ada, periksa apakah skor lebih tinggi
            if (studentScore > result[className].score) {
                result[className] = {
                    name: student.name,
                    score: studentScore
                };
            }
        }
    }

    return result;
}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}

