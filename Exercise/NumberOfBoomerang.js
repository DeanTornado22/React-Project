function countBoomerangs(arrayBoomerangs) {
  var result = 0;
  for (let i = 0; i < arrayBoomerangs.length - 2; i++) {
    if (arrayBoomerangs[i] == arrayBoomerangs[i + 2]) {
      if (
        arrayBoomerangs[i + 1] != arrayBoomerangs[i] &&
        arrayBoomerangs[i + 1] != arrayBoomerangs[i + 2]
      ) {
        result += 1;
      }
    }
  }
  return result;
}

console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));
console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9]));
console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]));
console.log(countBoomerangs([3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]));
console.log(countBoomerangs([1, 7, 1, 7, 1, 7, 1]));
