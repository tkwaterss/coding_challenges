function rowSumOddNumbers(n) {
	//row n will have n numbers
    // lets say row 5
    // that means odds from rows 1 through 4 are used already
    // so 1 + 2 + 3 + 4 odds are used we start at that + 1
    let start = 0
    let sum = 0
    for (let i = 0; i < n; i++) {
      start += i;
    }
    start = start * 2 + 1;
    console.log(start)
    for (let i = 0; i < n; i++) {
      sum += start
      start += 2
    }
    return sum
}

console.log(rowSumOddNumbers(1), 1)
console.log(rowSumOddNumbers(2), 8)
console.log(rowSumOddNumbers(3), 27)
console.log(rowSumOddNumbers(4), 64)
console.log(rowSumOddNumbers(42), 74088)