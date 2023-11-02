const productFib = prod => {
  const sequence = [0, 1]
  let index = 1

  while (sequence[index] * sequence[index - 1] < prod) {
    sequence.push(sequence[index] + sequence[index - 1])
    index++
  }
  
  if (sequence[index] * sequence[index - 1] === prod) {
    return [sequence[index - 1], sequence[index], true]
  } else {
    return [sequence[index - 1], sequence[index], false]
  }
}

console.log(productFib(4895))