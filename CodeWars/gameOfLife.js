//TODO Need to add a perimeter check around existing cells

const getGeneration = (cells, generations) => {
  if (cells.filter((cell) => cell.includes(1)).length === 0) return [[]];
  
  // modify cells matrix to have an exterior 
  cells = cells.map((cell) => {
    cell.push(0);
    cell.unshift(0);
    return [...cell];
  })
  cells.push(new Array(cells[0].length).fill(0))
  cells.unshift(new Array(cells[0].length).fill(0))
  
  //creating a shallow copy of cells to mutate
  const output = cells.map((cell) => [...cell]);

  //looping for number of generations
  for (let i = 0; i < generations; i++) {
    //looping through arrays
    for (let j = 0; j < cells.length; j++) {
      //looping through values
      for (let k = 0; k < cells[j].length; k++) {
        //looking at position cells[j][k]
        let count = 0;

        //checking all 8 neighbors and indexing count of living neighbors
        if (j - 1 >= 0 && k - 1 >= 0 && cells[j - 1][k - 1] === 1) count++;
        if (j - 1 >= 0 && cells[j - 1][k] === 1) count++;
        if (j - 1 >= 0 && k + 1 < cells[j].length && cells[j - 1][k + 1] === 1)
          count++;
        if (k - 1 >= 0 && cells[j][k - 1] === 1) count++;
        if (k + 1 < cells[j].length && cells[j][k + 1] === 1) count++;
        if (j + 1 < cells.length && k - 1 >= 0 && cells[j + 1][k - 1] === 1)
          count++;
        if (j + 1 < cells.length && cells[j + 1][k] === 1) count++;
        if (
          j + 1 < cells.length &&
          k + 1 < cells[j].length &&
          cells[j + 1][k + 1] === 1
        )
          count++;

        //checking count of living neighbors and mutating output accordingly
        console.log(count);
        if (count < 2 || count > 3) {
          output[j][k] = 0;
        } else if (count === 3) {
          output[j][k] = 1;
        }
      }
    }
    cells = output.map((cell) => [...cell])
  }
  //TODO Need to loop over matrix and remove extra 0's on exterior

  return output;
};

console.log(
  getGeneration(
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
    1
  )
);
console.log(
  getGeneration(
    [
      [1, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
    2
  )
);
