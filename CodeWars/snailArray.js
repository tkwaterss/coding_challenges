const snail = (matrix) => {
  let boxEnd = matrix[0].length - 1;
  let boxStart = 0;
  let output = [];

  while (boxEnd >= 0) {
    // adding the top row of the current box
    for (let i = boxStart; i <= boxEnd; i++) {
      output.push(matrix[boxStart][i]);
    }
    // adding the back column of the current box
    for (let i = boxStart + 1; i <= boxEnd; i++) {
      output.push(matrix[i][boxEnd]);
    }
    // adding the bottom row of the current box
    for (let i = boxEnd - 1; i >= boxStart; i--) {
      output.push(matrix[boxEnd][i]);
    }
    // adding the front column of the current box
    for (let i = boxEnd - 1; i > boxStart; i--) {
      output.push(matrix[i][boxStart]);
    }

    // adjusting the box size
    boxStart++;
    boxEnd --;
  }

  return output;
};

// [ 1,  2,  3,  4]
// [ 5,  6,  7 , 8]
// [ 9, 10, 11, 12]
// [13, 14, 15, 16]

// [ 1,  2,  3,  4,  5]
// [ 6,  7,  8,  9, 10]
// [11, 12, 13, 14, 15]
// [16, 17, 18, 19, 20]
// [21, 22, 23, 24, 25]

// console.log(snail([[]]), '=====', [])
// console.log(snail([[1]]), '=====', [1])
// console.log(snail([[1, 2], [3, 4]]), '=====', [1, 2, 4, 3])
// console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), '=====', [1, 2, 3, 6, 9, 8, 7, 4, 5])
console.log(
  snail([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);

// console.log(snail([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), '=====', [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13])
// console.log(snail([[1, 2, 3, 4, 5, 6], [20, 21, 22, 23, 24, 7], [19, 32, 33, 34, 25, 8], [18, 31, 36, 35, 26, 9], [17, 30, 29, 28, 27, 10], [16, 15, 14, 13, 12, 11]]), '=====', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36])
