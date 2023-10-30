
const stringExpansion = string => {
  const numbers = '0123456789'.split('');

  let expanded = []
  let multiplier = 1;

  for (let i = 0; i < string.length; i++) {
    if (numbers.includes(string[i])) multiplier = +string[i]

    if (!numbers.includes(string[i])) {
      expanded.push(string[i].repeat(multiplier)) 
    }
  }
  return expanded.join('')
}

console.log(stringExpansion(''))
console.log(stringExpansion('3abc'))
console.log(stringExpansion('aaaaa'))
console.log(stringExpansion('3d332f2a'))