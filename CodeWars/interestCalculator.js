const interestCalc = (years, amount, rate) => {
  let months = years * 12;
  let total = 0;
  for (let i = 0; i < years; i++) {
    total *= (1 + rate)
    total += amount * 12
  }
  return `Total w/ interest: ${total}, total w/o interest: ${years * 12 * amount}`
}

console.log(interestCalc(20, 2000, 0.07))