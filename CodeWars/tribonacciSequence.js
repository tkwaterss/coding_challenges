const tribonacci = (sig, n) => {
  if (n < 3) return sig.splice(0, n);
  for (let i = 2; i <= n - 2; i++) {
    sig.push(sig[i] + sig[i - 1] + sig[i - 2])
  }
  return sig;
}

// console.log(tribonacci([1,2,3], 2))
// console.log(tribonacci([1,2,3], 1))
// console.log(tribonacci([1,2,3], 0))

const Xbonacci = (sig, n) => {
  if (n < sig.length) return sig.splice(0, n);
  let length = sig.length
  while (sig.length < n) {
    let nextNumber = 0;
    for (let i = sig.length - 1; i >= sig.length - length; i--) {
      nextNumber += sig[i];
    }
    sig.push(nextNumber);
  }
  return sig
}
console.log(Xbonacci([0,0,0,0,1],10))
console.log(Xbonacci([1,0,0,0,0,0,1],10))
console.log(Xbonacci([1,0,0,0,0,0,0,0,0,0],20))