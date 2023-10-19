const isValidWalk = walk => {
  let northSouth = 0;
  let eastWest = 0;
  for (let direction of walk) {
    if (direction === 'n') northSouth++
    if (direction === 's') northSouth--
    if (direction === 'e') eastWest++
    if (direction === 'w') eastWest--
  }
  return (northSouth === 0 && eastWest === 0 && walk.length === 10) ? true : false
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['w']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))