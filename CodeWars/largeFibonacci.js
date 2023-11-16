function findSum(first, second) {
	var sum = '';
	var carry = 0;
	var diff = second.length - first.length;
	for (i = first.length - 1; i >= 0; i--) {
		var temp =
			(Number(first.charAt(i)) % 10) +
			(Number(second.charAt(i + diff)) % 10) +
			carry;
		if (temp >= 10) {
			sum = (temp % 10) + sum;
			carry = Math.floor(temp / 10);
		} else {
			sum = temp + sum;
			carry = 0;
		}
	}
	if (carry) {
		sum = carry + sum;
	}
	return sum;
}

const fib = n => {
  let fibSet = ['0', '1'];
  if (n < 0) return null
  if (n < 1) return fibSet[n]
  
  let count = 1;
  while (count < n) {
    fibSet.push(findSum(fibSet[0], fibSet[1]));
    fibSet.shift();

    count ++
  }
  return +fibSet[1];
}

// console.log(fib(-2));
// console.log(fib(1));
console.log(fib(1000));