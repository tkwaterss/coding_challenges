const count = (string) => {
  const alphabet = [
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
  ];
  const letterCount = {};

  for (let letter of alphabet) {
    //could maybe use regEx with String.matchAll(regEx), should return array of all matches
    for (let char of string) {
      if (letter === char)
        letterCount[letter] ? letterCount[letter]++ : (letterCount[letter] = 1);
    }
  }
  return letterCount;
};

console.log(count("AABCSDDSafdafasdjl"));
