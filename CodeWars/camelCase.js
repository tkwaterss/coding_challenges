const toCamelCase = string => {
  return string.replaceAll(' ', '-').replaceAll('_', '-').split('-').map((word, index) => {
    if (index === 0) return word
    if (index > 0) {
      word = word.split('');
      word[0] = word[0].toUpperCase();
      return word.join('');
    }
  }).join('')
}

console.log(toCamelCase('the-stealth-warrior'))
console.log(toCamelCase('the_stealth warrior'))
console.log(toCamelCase('The_stealth warrior'))