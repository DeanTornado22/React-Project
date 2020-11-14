String.prototype.count = function (s1) {
  return (
    (this.length - this.replace(new RegExp(s1, "g"), "").length) / s1.length
  );
};

function isSelfDescribing(numberInput) {
  var stringNumber = numberInput.toString();
  if (stringNumber.length % 2 == 0) {
    for (let i = 0; i < stringNumber.length - 1; i += 2) {
      let countOfInstance = parseInt(stringNumber[i]);
      let countCharacInString = stringNumber.count(stringNumber[i + 1]);
      if (countOfInstance != countCharacInString) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isSelfDescribing(224444));
console.log(isSelfDescribing(10123331));
console.log(isSelfDescribing(2211));
console.log(isSelfDescribing(333));
