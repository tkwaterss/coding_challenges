const productFib = prod => {
  const sequence = [0, 1]
  let index = 1

  while (sequence[index] * sequence[index - 1] < prod) {
    sequence.push(sequence[index] + sequence[index - 1])
    index++
  }

  return sequence[index] * sequence[index - 1] === prod ? [sequence[index - 1], sequence[index], true] : [sequence[index - 1], sequence[index], false]
}

console.log(productFib(4895))