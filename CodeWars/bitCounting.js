const countBits = (num) => {
  return num.toString(2).split('').filter((bit) => bit === '1').length
}

console.log(countBits(2))
console.log(countBits(7))
console.log(countBits(9))
console.log(countBits(5))