const uniqueInOrder = iterable => {
  iterable = typeof iterable === "string" ? iterable.split('') : iterable;
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] === iterable[i + 1]) {
      iterable.splice(i+1, 1)
      i--
    }
  }
  return iterable
}

console.log(uniqueInOrder('ABBBCCCABCDDD'))
console.log(uniqueInOrder([1,2,2,3,3,4,3,3]))
