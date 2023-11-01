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
  while (first.health >= 0 || second.health >= 0) {
    second.health -= first.damagePerAttack;
    first.health -= second.damagePerAttack;
  }
  return first.health <= 0 ? first.name : second.name;
}