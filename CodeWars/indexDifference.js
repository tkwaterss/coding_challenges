const region = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  ".",
  ",",
  ":",
  ";",
  "-",
  "?",
  "!",
  " ",
  "'",
  "(",
  ")",
  "$",
  "%",
  "&",
  '"',
];

const encrypt = (text) => {
  if (!text) return text;
  for (let char of text) {
    if (!region.includes(char)) throw( new Error())
  }

  text = text.split("");

  //encryption step 1 - changes case of every second character
  for (let i = 1; i < text.length; i += 2) {
    text[i] = text[i] === text[i].toUpperCase() ? text[i].toLowerCase() : text[i].toUpperCase()
  }

  let encrypted = [...text]
  
  //encryption step 2 completes all but first character
  for (let i = 1; i < encrypted.length; i++) {
    let newIndex = region.indexOf(text[i - 1]) - region.indexOf(text[i]);
    if (newIndex < 0) newIndex += 77;
    encrypted[i] = region[newIndex];
  }

  //encryption step 3 changes first character
  encrypted[0] = region[76 - region.indexOf(text[0])]

  return encrypted.join('');
};

const decrypt = (text) => {
  if (!text) return text;
  for (let char of text) {
    if (!region.includes(char)) throw( new Error())
  }
  text = text.split('');

  let decrypted = [...text];

  //step 1 - reverse the first letter
  decrypted[0] = region[76 - region.indexOf(text[0])]

  //step 2 - reverse all other letters
  for (let i = 1; i < text.length; i++) {
    let firstIndex = region.indexOf(decrypted[i - 1]);
    let secondIndex = region.indexOf(text[i]);
    let originalIndex = ((secondIndex - 77) * -1) + firstIndex;
    if (originalIndex > 76) {
      originalIndex = (firstIndex - secondIndex);
    }
    decrypted[i] = region[originalIndex];
  }

  for (let i = 1; i < decrypted.length; i += 2) {
    decrypted[i] = decrypted[i] === decrypted[i].toUpperCase() ? decrypted[i] = decrypted[i].toLowerCase() : decrypted[i] = decrypted[i].toUpperCase()
  }

  return decrypted.join('').replaceAll('"', '\"');
};

console.log(encrypt("This is a test!"));
console.log(encrypt("Business"));
console.log(encrypt("Do the kata \"Kobayashi-Maru-Test!\" Endless fun and excitement when finding a solution!"));

console.log(decrypt("&61kujla"))
console.log(decrypt("5MyQa9p0riYplZc"))
console.log(decrypt("$-Wy,dM79H'i'o$n0C&I.ZTcMJw5vPlZc Hn!krhlaa:khV mkL;gvtP-S7Rt1Vp2RV:wV9VuhO Iz3dqb.U0w"))
