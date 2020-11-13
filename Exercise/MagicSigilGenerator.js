function MagicSigil(stringName) {
  var result = "";
  var vowel = ["u", "e", "o", "a", "i"];
  var secondTime = [];
  var trimName = stringName.trim().toLowerCase();
  for (let i = 0; i < trimName.length; i++) {
    if (!vowel.includes(trimName[i])) {
      let posOfSameCharac = trimName.indexOf(trimName[i], i + 1);
      if (posOfSameCharac != -1) {
        secondTime.push(posOfSameCharac);
      }
      if (!secondTime.includes(i)) {
        result += trimName[i];
      }
    }
  }
  return result.toUpperCase();
}

console.log(MagicSigil("i am healthy"));
console.log(MagicSigil("I FOUND MY SOULMATE"));
console.log(MagicSigil("I have a job I enjoy and it pays well"));
