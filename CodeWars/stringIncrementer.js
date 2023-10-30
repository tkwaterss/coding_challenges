const incrementString = string => {
  const numbers = '0123456789'.split('');

  let index = string.length - 1;
  let numCaptured = false;
  let number = [];
  string = string.split('')

  while (!numCaptured) {
    if (numbers.includes(string[index])) {
      number.unshift(string[index])
      string.pop();
    } else {
      numCaptured = true;
    }
    index--;
  }
  let numLength = number.length;
  number = (+number.join('') + 1).toString().split('')

  if (number.length < numLength) number.unshift('0'.repeat(numLength - number.length))
  
  return [...string, ...number].join('');
}

console.log(incrementString("foobar000"))
console.log(incrementString("foobar999"))
console.log(incrementString("foobar00999"))