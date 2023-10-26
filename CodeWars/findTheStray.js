const stray = numbers => {
  for (let i = 1; i < numbers.length; i++) {
    if (numbers.lastIndexOf(numbers[i]) === i) {
      return numbers[i]
    }
  }
}