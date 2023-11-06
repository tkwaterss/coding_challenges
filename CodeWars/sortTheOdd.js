const sortArray = (array) => {
  let odds = []
  let index = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odds.push(array[i]);
      index.push(i);
    }
  }
  odds.sort((a, b) => a - b);
  index.sort((a, b) => a - b);

  for (let i = 0; i < odds.length; i++) {
    array.splice(index[i], 1, odds[i])
  }
  console.log(odds, index)
  return array;
};

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
