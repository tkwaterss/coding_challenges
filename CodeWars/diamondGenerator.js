const diamond = n => {
  if (n < 0 || n % 2 === 0) return null;
  let levels = []
  for (let i = 1; i <= n; i += 2) {
    levels.push(' '.repeat((n - i) / 2) + '*'.repeat(i))
  }
  for (let i = n - 2; i >= 0; i -= 2) {
    levels.push(' '.repeat((n - i) / 2) + '*'.repeat(i))
  }
  return levels.join('\n') + '\n'
}

console.log(diamond(5))
console.log(diamond(7))
console.log(diamond(6))