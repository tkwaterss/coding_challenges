const declareWinner = (fighter1, fighter2, firstAttack) => {
  let first;
  let second;
  if (fighter1.name === firstAttack) {
    first = fighter1;
    second = fighter2;
  } else {
    first = fighter2;
    second = fighter1;
  }
  while (first.health > 0 && second.health > 0) {
    second.health -= first.damagePerAttack;
    if (second.health >= 0) {
      first.health -= second.damagePerAttack;
    }
  }
  
  let winner = first.health <= 0 ? second : first;
  console.log(winner)
  return winner.name
}
const jerry = {
  name: 'jerry',
  health: 30,
  damagePerAttack: 3,
}
const bob = {
  name: 'bob',
  health: 30,
  damagePerAttack: 3,
}


console.log(declareWinner(jerry, bob, "Jerry"))