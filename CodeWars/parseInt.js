const parseInts = (string) => {
  const simpleNumbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  };

  const convertCompoundNumbers = (number) => {
    number = number.split("-");
    return simpleNumbers[number[0]] + simpleNumbers[number[1]];
  };
  const convertHundredNumbers = (number) => {
    if (!number[1]) return simpleNumbers[number[0].trim()] * 100;
    if (number[1].includes("and")) number[1] = number[1].replace("and ", "");
    return (simpleNumbers[number[0].trim()] * 100) + (number[1].includes('-') ? convertCompoundNumbers(number[1].trim()) : simpleNumbers[number[1].trim()]);
  };

  if (string === 'one million') return 1000000
  
  //dealing with thousands numbers
  if (string.includes("thousand")) {
    string = string.split("thousand").map((number) => {

      if (number.includes("hundred")) {
        number = number.trim().split("hundred").map((part) => {
          return part.trim();
        })
      } else {
        if (number.includes('and')) number = number.replace('and', '');
        number = number.trim();
      }
      
      return number;
    });

    //If else statements to break down thousands numbers
     if (string[0].length !== 2 && string[1].length !== 2) {
      //^ both base and tail are simple numbers
      console.log(string)

      if (!string[1]) return (string[0].includes('-') ? convertCompoundNumbers(string[0]) : simpleNumbers[string[0]]) * 1000

      return (string[0].includes('-') ? convertCompoundNumbers(string[0]) : simpleNumbers[string[0]]) * 1000 + (string[1].includes("-") ? convertCompoundNumbers(string[1]) : simpleNumbers[string[1]]);
    }
    else if (string[0].length === 2 && string[1].length !== 2) {
      //^ base is hundreds, tail is a simple number
      console.log(string)
      if (!string[1]) return (convertHundredNumbers(string[0]) * 1000)
      return (convertHundredNumbers(string[0]) * 1000) + (string[1].includes("-") ? convertCompoundNumbers(string[1]) : simpleNumbers[string[1]]);
    } 
    else if (string[0].length !== 2 && string[1].length === 2) {
      //^ base is a simple number, tail is hundreds
      console.log(string)

      return ((string[0].includes('-') ? convertCompoundNumbers(string[0]) : simpleNumbers[string[0]]) * 1000) + convertHundredNumbers(string[1])
    } 
    else if (string[0].length === 2 && string[1].length === 2) {
      //^ both numbers are hundreds
      console.log(string)

      return (convertHundredNumbers(string[0]) * 1000) + convertHundredNumbers(string[1])
    }  
  }
  
  //dealing with 3 digit numbers
  if (string.includes("hundred")) return convertHundredNumbers(string.split('hundred'));

  //dealing with 2 digit compound numbers
  if (typeof string === 'string' && string.includes("-")) return convertCompoundNumbers(string);

  //dealing with strictly simple numbers
  if (typeof string === "string") return simpleNumbers[string];
};

// console.log(
//   parseInts("seven hundred eighty-three thousand nine hundred and nineteen")
// );
// console.log(parseInts("twenty-one thousand nine hundred"))
// console.log(parseInts("seven hundred thousand"))
console.log(parseInts("two hundred thousand and three"))
// console.log(parseInts("one thousand nine hundred"))
// console.log(parseInts("one thousand nine"))
// console.log(parseInts("one thousand"))
// console.log(parseInts('seven hundred'))
// console.log(parseInts("two hundred forty-six"));
// console.log(parseInts("eighty-three"));
// console.log(parseInts("twenty"));
// console.log(parseInts('one'))
