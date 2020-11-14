function rolls(arrayDiceRoll) {
  var result = 0;
  for (let i = 0; i < arrayDiceRoll.length; i++) {
    if (arrayDiceRoll[i] == 1) {
      result += arrayDiceRoll[i];
      i += 1;
      continue;
    } else if (arrayDiceRoll[i] == 6) {
      result += arrayDiceRoll[i];
      i += 1;
      result += arrayDiceRoll[i] * 2;
      continue;
    } else {
      result += arrayDiceRoll[i];
    }
  }
  return result;
}

console.log(rolls([1, 2, 3]));
console.log(rolls([2, 6, 2, 5]));
console.log(rolls([6, 1, 1]));
