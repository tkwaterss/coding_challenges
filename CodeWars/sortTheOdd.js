const sortArray = (array) => {
  let odds = {}
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odds[array[i]] = i;
    }
  }
  return odds
};

console.log(sortArray([7, 1]));
console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));
