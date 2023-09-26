

var uniqueInOrder=function(iterable){
  iterable = [...iterable]

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i + 1]) {
      iterable.splice(i,1)
      i--
    }
  }
  return iterable;
}

// console.log(uniqueInOrder('AAABBBCCCDDAABDCAJLDS'))
// console.log(uniqueInOrder([1,1,1,3,5,2,2,2,2,1,3,52]))

const stringPlay = string => {
  string = string.toLowerCase().split('');
  console.log(string);

  let output = true;

  string.forEach((letter, index) => {
    if (string.lastIndexOf(letter) !== index) {
      console.log(index);
      output =  false;
    };
  })
  return output;
}

console.log(stringPlay('abcdefg'))
console.log(stringPlay('abacdefg'))