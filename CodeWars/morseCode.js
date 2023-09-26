const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};

const decodeMorse = (morse) => {
  //^ favorite solution found
  return morse
    .trim()
    .split(/  | /)
    .map((code) => MORSE_CODE[code] || " ")
    .join("");

  //^ .map() solution one liner
  // return morse
  //   .trim()
  //   .split("   ")
  //   .map((word) =>
  //     word
  //       .split(" ")
  //       .map((codedLetter) => MORSE_CODE[codedLetter])
  //       .join("")
  //   )
  //   .join(" ");

  //^ Initial Solution
  // morse = morse.trim().split("   ");
  // let output = "";
  // for (let word of morse) {
  //   if (word === "") continue;
  //   let decodedWord = "";
  //   word = word.split(" ");
  //   for (let letter of word) {
  //     decodedWord += `${MORSE_CODE[letter]}`;
  //   }
  //   output += ` ${decodedWord}`;
  // }
  // return output.trim();
};

// console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
// console.log(decodeMorse("   .... . -.--   "));

const decodeBits = (binary) => {
  binary = binary.split("");
  if (!binary.includes("1")) return "";

  //removing 0's off front and back of array
  binary.splice(0, binary.indexOf("1"));
  binary.splice(binary.lastIndexOf("1") + 1);

  //create copy array to cound and modify
  let binaryCopy = [...binary];
  let shortSet = 0;

  do {
    //loop to find length of a set of 1's
    let i = 0;
    let setLength;
    while (binaryCopy[i] === "1") {
      setLength = i + 1;
      i++;
    }
    binaryCopy.splice(0, binaryCopy.indexOf("0"));

    i = 0;
    let pauseLength;
    while (binaryCopy[i] === "0") {
      pauseLength = i + 1;
      i++;
    }

    //check and set lengths
    if (shortSet === 0) {
      shortSet = setLength;
    } else if (setLength < shortSet) {
      shortSet = setLength;
    }
    if (pauseLength < shortSet) {
      shortSet = pauseLength;
    }

    //remove counted set from copy array
    binaryCopy.splice(0, binaryCopy.indexOf("1"));
  } while (binaryCopy.includes("0"));

  binary = binary.join("");
  binary = binary.replace(new RegExp("1".repeat(shortSet * 3), "g"), "-");
  binary = binary.replace(new RegExp("0".repeat(shortSet * 7), "g"), "   ");
  binary = binary.replace(new RegExp("0".repeat(shortSet * 3), "g"), " ");
  binary = binary.replace(new RegExp("1".repeat(shortSet), "g"), ".");
  binary = binary.replace(new RegExp("0".repeat(shortSet), "g"), "");

  return binary;
};

// console.log(decodeBits('1110111'))
// console.log(decodeBits("0000"));
// console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
// console.log(decodeMorse(decodeBits('000110011001100110000001100000011111100110011111100111111000')))
// console.log(decodeBits('0001100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011000'))

//* Rules
//^ transmission speed varies => find shortest and give a + 1 or 2 tolerance in replacements
//^ find any sets longer than the short set + tolerance and apply another tolerance
//^ sampling speed may not be a perfect multiple of the dot

const decodeBitsAdvanced = (binary) => {
  binary = binary.split("");
  if (!binary.includes("1")) return "";

  //removing 0's off front and back of array
  binary.splice(0, binary.indexOf("1"));
  binary.splice(binary.lastIndexOf("1") + 1);

  //create copy array to cound and modify
  let binaryCopy = [...binary];
  let shortSet;

  do {
    //loop to find length of a set of 1's
    let i = 0;
    let setLength;
    while (binaryCopy[i] === "1") {
      setLength = i + 1;
      i++;
    }
    binaryCopy.splice(0, binaryCopy.indexOf("0"));

    i = 0;
    let pauseLength;
    while (binaryCopy[i] === "0") {
      pauseLength = i + 1;
      i++;
    }

    //check and set shortSet length to shortest length
    if (!shortSet) {
      shortSet = setLength;
    } else if (setLength < shortSet) {
      shortSet = setLength;
    }
    if (pauseLength < shortSet) {
      shortSet = pauseLength;
    }
    //remove counted set from copy array
    binaryCopy.splice(0, binaryCopy.indexOf("1"));
  } while (binaryCopy.includes("0"));

  //^Do another run through of a binary copy to find the shortest long set
  binaryCopy = [...binary];
  let longSet;

  do {
    //loop to find length of a set of 1's
    let i = 0;
    let setLength;
    while (binaryCopy[i] === "1") {
      setLength = i + 1;
      i++;
    }
    binaryCopy.splice(0, binaryCopy.indexOf("0"));

    i = 0;
    let pauseLength;
    while (binaryCopy[i] === "0") {
      pauseLength = i + 1;
      i++;
    }

    //check and set longSet length to shortest found
    if (!longSet && setLength > shortSet + 3) {
      longSet = setLength;
    } else if (setLength > shortSet + 3 && setLength < longSet) {
      longSet = setLength;
    }
    //remove counted set from copy array
    binaryCopy.splice(0, binaryCopy.indexOf("1"));
  } while (binaryCopy.includes("0"));

  binary = binary.join("");

  //replace dashes with tolerance
  binary = binary.replace(new RegExp("1".repeat(longSet+3), "g"), "-");
  binary = binary.replace(new RegExp("1".repeat(longSet+2), "g"), "-");
  binary = binary.replace(new RegExp("1".repeat(longSet+1), "g"), "-");
  binary = binary.replace(new RegExp("1".repeat(longSet), "g"), "-");

  //replace wordSpaces with tolerance
  binary = binary.replace(new RegExp("0".repeat(shortSet * 7), "g"), "   ");

  //replace charSpaces with tolerance
  binary = binary.replace(new RegExp("0".repeat(longSet + 3), "g"), " ");
  binary = binary.replace(new RegExp("0".repeat(longSet + 2), "g"), " ");
  binary = binary.replace(new RegExp("0".repeat(longSet + 1), "g"), " ");
  binary = binary.replace(new RegExp("0".repeat(longSet), "g"), " ");

  //replace dots with tolerance
  binary = binary.replace(new RegExp("1".repeat(shortSet + 2), "g"), ".");
  binary = binary.replace(new RegExp("1".repeat(shortSet + 1), "g"), ".");
  binary = binary.replace(new RegExp("1".repeat(shortSet), "g"), ".");

  //replace pauses with tolerance
  binary = binary.replace(new RegExp("0".repeat(shortSet + 2), "g"), "");
  binary = binary.replace(new RegExp("0".repeat(shortSet + 1), "g"), "");
  binary = binary.replace(new RegExp("0".repeat(shortSet), "g"), "");

  return binary;
};

console.log(
  decodeBitsAdvanced(
    "0000000011011010011100000110000001111110100111110011111100000000000111011111111011111011111000000101100011111100000111110011101100000100000"
  )
);
console.log(
  decodeMorse(
    decodeBitsAdvanced(
      "0000000011011010011100000110000001111110100111110011111100000000000111011111111011111011111000000101100011111100000111110011101100000100000"
    )
  )
);
