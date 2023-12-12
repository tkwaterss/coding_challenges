const alphabetPosition = (text) =>
  text
    .toLowerCase()
    .split("")
    .filter((char) => "abcdefghijklmnopqrstuvwxyz".split("").includes(char))
    .map((char) => "abcdefghijklmnopqrstuvwxyz".split("").indexOf(char) + 1)
    .join(" ");

console.log(alphabetPosition("abcdefghi"));