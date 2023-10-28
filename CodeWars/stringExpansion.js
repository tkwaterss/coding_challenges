const numbers = '0123456789'.split('');
const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split('');
const upperCase = lowerCase.join('').toUpperCase().split('');
const stringExpansion = string => {
  if (!string || !string.includes(...lowerCase, ...upperCase)) return ''
  string = string.split('');
  let expanded = []
  for (let i = 0; i < string.length - 1; i++) {
    if (!string[i + 1]) {
      
    }

    if (numbers.includes(string[i]) && !numbers.includes(string[i + 1])) {
      expanded.push(string[i + 1].repeat(+string[i]))
    }
    
    
    if (!numbers.includes(string[i])) expanded.push(string[i])

  }

  return expanded
}

console.log(stringExpansion(''))
console.log(stringExpansion('3abc'))
console.log(stringExpansion('a111'))
console.log(stringExpansion('3d332f2a'))