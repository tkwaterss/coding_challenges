function isPrime(number) {
  const isPrime = true;
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return isPrime;
}

function getPrimes(start, finish) {
  if (start > finish) {
    let newStart = finish;
    finish = start;
    start = newStart;
  }
  let primes = [];
  for (let i = start; i <= finish; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes.join(",");
}

console.log(isPrime(0), false);
console.log(isPrime(1), false);
console.log(isPrime(2), true);
console.log(isPrime(3), true);
console.log(isPrime(4), false);
console.log(isPrime(5), true);

console.log(getPrimes(0, 0));
console.log(getPrimes(0, 30));
console.log(getPrimes(30, 0));
