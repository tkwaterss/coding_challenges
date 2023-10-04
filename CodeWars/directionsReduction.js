const dirReduc = (directions) => {
  const opposites = {
    "NORTH": "SOUTH",
    "SOUTH": "NORTH",
    "EAST": "WEST",
    "WEST": "EAST"
  }
  let changed = true;

  while (changed) {
    let initialLength = directions.length;
    for (let i = 0; i < directions.length; i++) {
      if (directions[i + 1] === opposites[directions[i]]) {
        directions.splice(i, 2);
        i--;
      }
    }
    directions.length === initialLength ? changed = false : null;
  }

  return directions;
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])