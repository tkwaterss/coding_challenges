const stray = numbers => {
  let first = numbers.filter(num => num !== numbers[0])
  let second = numbers.filter(num => num === numbers[0])
  return first.length === 1 ? first[0] : second[0]
}