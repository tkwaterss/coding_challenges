const roundToNext5 = num => {
  if (num % 5 === 0) return num
  if (num > 0) {
    return num + (5 - (num % 5))
  } else {
    return num + (5 - (num % 5) - 5)
  }
}

console.log(roundToNext5(-1))
console.log(roundToNext5(-7))
console.log(roundToNext5(-8))
console.log(roundToNext5(-9))