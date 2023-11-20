const mazeRunner = (maze, directions) => {
  // first find the start point
  let position = []
  for (let i = 0; i < maze.length; i++) {
    if (maze[i].includes(2)) {
      position = [i, maze[i].indexOf(2)]
    }
  }
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "N") {
      position[0]--
    } else if (directions[i] === "S") {
      position[0]++
    } else if (directions[i] === "E") {
      position[1]++
    } else {
      position[1]--
    }
    if (position[0] > maze.length - 1 || position[0] < 0) return "Dead"
    if (position[1] > maze[0].length - 1 || position[1] < 0) return "Dead"
    if (maze[position[0]][position[1]] === 1) return "Dead"
    if (maze[position[0]][position[1]] === 3) return "Finish"
  }
  return "Lost"
}

console.log(mazeRunner([[1,1,1,1,1,1,1],
  [1,0,0,0,0,0,3],
  [1,0,1,0,1,0,1],
  [0,0,1,0,0,0,1],
  [1,0,1,0,1,0,1],
  [1,0,0,0,0,0,1],
  [1,2,1,0,1,0,1]], ["N","N","N","N","N","E","E","E","E","E"]))