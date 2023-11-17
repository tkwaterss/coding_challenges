const towerBuilder = floors => {
  let tower = []
  for (let i = 0; i < floors; i++) {
    let stars = '*'.repeat((i * 2) + 1)
    let spaces = ' '.repeat(((floors * 2) - 1 - stars.length) / 2)
    tower.push(spaces + stars + spaces);
  }
  return tower
}

console.log(towerBuilder(4))