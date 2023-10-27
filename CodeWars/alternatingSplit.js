const encrypt = (text, n) => {
  if (!text || n < 0) return text;
  text = text.split('')
  for (let i = 0; i < n; i++) {
    let evens = []
    let odds = []
    for (let j = 0; j < text.length; j++) {
      j % 2 === 0 ? evens.push(text[j]) : odds.push(text[j])
    }
    text = [...odds, ...evens]
  }
  return text.join('');
}


const decrypt = (encryptedText, n) => {
  if (!encryptedText || n < 0) return encryptedText;
  let text = encryptedText.split('')
  let length = Math.floor(encryptedText.length / 2)
  for (let i = 0; i < n; i++) {
    let odds = text.slice(0, length);
    let evens = text.slice(length);
    let newText = []
    while (odds.length > 0 || evens.length > 0) {
      if (evens.length > 0) {
        newText.push(evens[0])
        evens.shift()
      }
      if (odds.length > 0) {
        newText.push(odds[0])
        odds.shift()
      }
    }
    text = newText;
  }
  return text.join('');
}
console.log(encrypt("", 0))
console.log(encrypt(null, 0))
console.log(encrypt("This is a test!", 2))
console.log(encrypt("This is a test!", 3))
console.log(encrypt("This is a test!", 4))
console.log(encrypt("This kata is very interesting!", 1))
