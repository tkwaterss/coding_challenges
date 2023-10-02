const spiralize = n => {
  // create a spiral array of n x n
  let boxEnd = n - 1;
  let boxStart = 0;
  let matrix = new Array(n)
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(n).fill(0);
  }

  while (boxEnd >= boxStart) {

    //after initial run, adding zero behind start
    if (boxStart > 0 && boxStart <= n / 2) {
      matrix[boxStart][boxStart - 1] = 1;
    }
    // adding the top row of the current box
    for (let i = boxStart; i <= boxEnd; i++) {
      matrix[boxStart][i] = 1;
    }
    // adding the back column of the current box
    for (let i = boxStart + 1; i <= boxEnd; i++) {
      matrix[i][boxEnd] = 1;
    }
    // adding the bottom row of the current box
    for (let i = boxEnd - 1; i >= boxStart; i--) {
      if (boxEnd - boxStart > 1) {
        matrix[boxEnd][i] = 1;
      }
    }
    // adding the front column of the current box
    for (let i = boxEnd - 1; i > boxStart + 1; i--) {
      matrix[i][boxStart] = 1;
    }

    // adjusting the box size
    boxStart += 2;
    boxEnd -= 2;
  }

  console.table(matrix);
  return matrix;

}

console.log(spiralize(5))
console.log(spiralize(8))
console.log(spiralize(10))

//^ Examples of 5 and 8
// [ [1,1,1,1,1],
//   [0,0,0,0,1],
//   [1,1,1,0,1],
//   [1,0,0,0,1],
//   [1,1,1,1,1]]

// [ [1,1,1,1,1,1,1,1],
//   [0,0,0,0,0,0,0,1],
//   [1,1,1,1,1,1,0,1],
//   [1,0,0,0,0,1,0,1],
//   [1,0,1,0,0,1,0,1],
//   [1,0,1,1,1,1,0,1],
//   [1,0,0,0,0,0,0,1],
//   [1,1,1,1,1,1,1,1]]