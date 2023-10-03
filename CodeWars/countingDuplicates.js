const duplicateCount = (string) => {
  //count will increase for every set of multiple chars
  let count = 0;
  string = string.toLowerCase().split('');
  while (string.length > 0) {
    console.log('looping')
    if (string.lastIndexOf(string[0] > 0)) {
      count ++;
      while (string.lastIndexOf(string[0]) > 0) {
        console.log('loop')
        string.splice(string.lastIndexOf(string[0]), 1)
      }
      string.shift();
    } else {
      string.shift();
      console.log('removing')
    }
  }
  return count;
}

console.log(duplicateCount(''))
console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabbcde'))
