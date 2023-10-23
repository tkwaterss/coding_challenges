const persistence = num => {
  let count = 0;
  
  while (num > 9) {
    num = num.toString().split('').map(char => +char);

    num = num.reduce((acc, cur) => {
      return acc *= cur
    }, 1)
    count++
  }
  return count
}

console.log(persistence(39))