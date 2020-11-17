function digitaldrome(numberInput) {}
var stringNumber = numberInput.toString();
var b = a.split(",").map(function (item) {
  return parseInt(item, 10);
});
var isAscending = (a) =>
  a
    .slice(1)
    .map((e, i) => e > a[i])
    .every((x) => x);
var isDescending = (a) =>
  a
    .slice(1)
    .map((e, i) => e < a[i])
    .every((x) => x);

console.log(isAscending([1, 2, 3, 4]));
console.log(isAscending([1, 2, 5, 4]));
console.log(isAscending([1, 2, 5, 4]));
console.log(isDescending([6, 2, 1, -1]));
console.log(b);
