const digPow = (num, p) => {
  let digits = num.toString().split('')

  let powered = digits.reduce((acc, cur, index) => {
    return acc += Math.pow(+cur, (p + index))
  }, 0)

  return (Number.isInteger(powered / num)) ? (powered / num) : -1;
}

console.log(digPow(89, 1))
console.log(digPow(92, 1))
console.log(digPow(695, 2))
console.log(digPow(46288, 3))