function checkExam(array1, array2) {
  const score = array2.reduce((acc, cur, index) => {
    if (!cur) {return acc}
    return cur === array1[index] ? acc += 4 : acc -= 1;
  }, 0)
  return score > 0 ? score : 0;
 }

// console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), 6)
// console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), 7)
// console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]), 16)
// console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]), 0)

function positiveSum(arr) {
  return arr.filter(item => item > 0).reduce((acc, cur) => acc + cur)
}

  console.log(positiveSum([1,2,3,-4]));
