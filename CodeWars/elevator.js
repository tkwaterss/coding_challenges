//Rules
//* Recieve a matrix
  //* The first level index indicates floors of building
  //* Each inner array contains people indicated by number of floor they want to get too.
//* Lift starts at floor 0 and takes on people up to its capacity
  //* At each floor drop off people that have reached their destination and pick up people going in same direction as the lift
//* 

const theLift = (que, capacity) => {
  const floorsVisited = [];
  const liftLoad = [];
  const allPeopleDelivered = false;

  while (!allPeopleDelivered) {
    for (let i = 0; i < que.length; i++) {
      if (que[i] > i) {
        liftLoad.push(que[i])
      }
    }
  }



  return floorsVisited;
}

console.log(theLift([
  [], // G
  [0], // 1
  [], // 2
  [], // 3
  [2], // 4
  [3], // 5
  [], // 6
], 5))