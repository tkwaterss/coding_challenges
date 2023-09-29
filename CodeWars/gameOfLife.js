//! Unable to find correct solution on my own
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

  //removing empty rows from top and bottom
  while (!output[0].includes(1) || !output[output.length -1].includes(1)) {
    if (!output[output.length - 1].includes(1)) output.pop()
    if (!output[0].includes(1)) output.shift()
  }

  //removing empty columns from front and back
  let emptyColumns = true;
  do {
    for (let cell of output) {
      if (cell[0] === 1) emptyColumns = false;
      if (cell[cell.length - 1] === 1) emptyColumns = false;
    }
    if (emptyColumns) {
      for (let cell of output) {
        cell.shift()
        cell.pop()
      }
    }
  } while (emptyColumns)

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

//! Another users solution
function getGeneration(cells, generations){

  var ce = JSON.parse(JSON.stringify(cells));

  var minY;
  var maxY;
  var minX;
  var maxX;

  for (var i = 1; i <= generations; i++) {
    expandUniverse();

    ce = ce.map(function(r, row){return r.map(function(c, col){return setValue(row, col, -c);});});

    getBoundaries();
    shrinkUniverse();
  }

  function setValue(row, col, sum) {
    for (var r = row - 1; r <= row + 1; r++)
      for (var c = col - 1; c <= col + 1; c++)
        sum += (ce[r] && ce[r][c]) | 0;

    return +(sum == 3 || sum == 2 && ce[row][col]);
  }

  function getBoundaries() {
    minY = maxY = minX = maxX = -1;
    
    ce.forEach(function(r, row){r.forEach(function(c, col){
      if (c == 1) {
        minY = minY == -1 ? row : Math.min(minY, row);
        maxY = maxY == -1 ? row : Math.max(maxY, row);
        minX = minX == -1 ? col : Math.min(minX, col);
        maxX = maxX == -1 ? col : Math.max(maxX, col);
      }
    });});
  }

  function expandUniverse() {
    var a = [], b = [];

    ce[0].forEach(function(){a.push(0); b.push(0);});

    ce.unshift(a);
    ce.push(b);
    ce.map(function(i){i.unshift(0); i.push(0);});
  }

  function shrinkUniverse() {
    ce = ce.map(function(e){ return e.slice(minX, maxX + 1);});
    ce = ce.slice(minY, maxY + 1);
  }

  return ce;
}