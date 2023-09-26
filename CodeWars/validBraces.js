// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

//This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!

//All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
const test1 = '()[]{}' // 40, 41, 91, 93, 123, 125
const test2 = '([()][])'
const test3 = '[(])'

const validBraces = (braces) => {
  // braces = braces.split('');
  for (let i = 0; i < braces.length; i++) {
    console.log(braces.charCodeAt(i));
  }
}

console.log(validBraces(test1), true)
// console.log(validBraces(test2), true)
// console.log(validBraces(test3), false)