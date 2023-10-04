const duplicateCount = (string) => {
  let count = 0;
  let chars = {};
  string = string.toLowerCase().split('');

  string.forEach((char, index) => !chars[string[index]] ? chars[string[index]] = 1 : chars[string[index]]++)

  for (let key in chars) {
    if (chars[key] > 1) {
      count++;
    }
  }

  return count;
}

console.log(duplicateCount(''))
console.log(duplicateCount('abcde'))
console.log(duplicateCount('aabbcde'))
