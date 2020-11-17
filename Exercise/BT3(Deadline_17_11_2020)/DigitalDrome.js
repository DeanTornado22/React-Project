Object.defineProperties(Array.prototype, {
  count: {
    value: function (value) {
      return this.filter((x) => x == value).length;
    },
  },
});

function digitaldrome(numberInput) {
  var stringNumber = numberInput.toString();
  var numberArray = stringNumber.split("").map(Number);
  var isAscending = (a) =>
    a
      .slice(1)
      .map((e, i) => e >= a[i])
      .every((x) => x);
  var isDescending = (a) =>
    a
      .slice(1)
      .map((e, i) => e <= a[i])
      .every((x) => x);

  var firstNum = numberArray[0];
  if (numberArray.count(firstNum) == numberArray.length) {
    return "Repdrome";
  } else {
    if (isAscending(numberArray) == true) {
      for (let i = 0; i < numberArray.length; i++) {
        if (numberArray.indexOf(numberArray[i], i) != -1) {
          return "Plaindrome";
        }
      }
      return "Metadrome";
    } else if (isDescending(numberArray) == true) {
      for (let i = 0; i < numberArray.length; i++) {
        if (numberArray.indexOf(numberArray[i], i + 1) != -1) {
          return "Nialpdrome";
        }
      }
      return "katadrome";
    } else {
      return "Nondrome";
    }
  }
}

console.log(digitaldrome(484655));
console.log(digitaldrome(666));
console.log(digitaldrome(1357));
console.log(digitaldrome(13577));
console.log(digitaldrome(765));
console.log(digitaldrome(7655));
