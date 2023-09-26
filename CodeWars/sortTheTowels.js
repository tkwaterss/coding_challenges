const towels1 = ["blue", "red", "blue", "red", "blue"];
const usage1 = [0, 2, 1, 4, 2, 7, -2];

const sortThePile = (towels, usage) => {
  //for each week we modify the towels array based on usage
  for (let towelsUsed of usage) {
    if (towelsUsed <= 0) continue;
    if (towelsUsed > towels.length) {
      towelsUsed = towels.length;
    }
    let dirtyTowels = towels.splice(towels.length - towelsUsed, towelsUsed);
    let redTowels = [];
    let blueTowels = [];
    dirtyTowels.forEach((towel) => {
      towel === "blue" ? blueTowels.push("blue") : redTowels.push("red");
    });
    towels.push(...redTowels);
    towels.push(...blueTowels);
  }
  return towels;
};

console.log(sortThePile(towels1, usage1), [
  "blue",
  "red",
  "red",
  "blue",
  "blue",
]);
