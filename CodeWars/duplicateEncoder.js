const duplicateEncode = string => {
  string = string.toLowerCase().split('')
  let output = [];
  
  for (let i = 0; i < string.length; i++) {
    let charCount = string.filter(char => char === string [i])
    charCount.length > 1 ? output.push(')') : output.push('(')
  }
  return output.join('')
}

console.log(duplicateEncode(' ( ( )'), 'should be )))))(')
console.log(duplicateEncode('nnF@kO cn)nnQnTy'), 'should be ))(((((()())()((')
// console.log(duplicateEncode('Success'))
// console.log(duplicateEncode('(( @'))