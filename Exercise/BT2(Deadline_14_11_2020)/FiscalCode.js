function surName(stringSurName) {
  var lengthName = stringSurName.trim().replace(/\s+/g, "").length;
  var stringSurNameUpperCase = stringSurName
    .trim()
    .replace(/\s+/g, "")
    .toUpperCase();
  var resultName = "";
  var vowelArray = ["A", "E", "U", "O", "I"];
  var vowelInString = [];
  if (lengthName >= 3) {
    for (let i = 0; i < lengthName; i++) {
      if (!vowelArray.includes(stringSurNameUpperCase[i])) {
        if (resultName.length >= 3) {
          return resultName;
        }
        resultName += stringSurNameUpperCase[i];
      } else {
        vowelInString.push(stringSurNameUpperCase[i]);
      }
    }
    while (resultName.length <= 2) {
      let i = 0;
      resultName += vowelInString[i];
      i++;
    }
    return resultName;
  } else {
    for (let i = 0; i < lengthName; i++) {
      if (!vowelArray.includes(stringSurNameUpperCase[i])) {
        resultName += stringSurNameUpperCase[i];
      } else {
        vowelInString.push(stringSurNameUpperCase[i]);
      }
    }
    if (vowelInString.length > 0) {
      resultName += vowelInString;
    }
    resultName += "X";
    return resultName;
  }
}

function Name(stringName) {
  var lengthName = stringName.trim().replace(/\s+/g, "").length;
  var stringNameUpperCase = stringName.trim().replace(/\s+/g, "").toUpperCase();
  var resultName = "";
  var vowelArray = ["A", "E", "U", "O", "I"];
  var vowelInString = [];
  var consonantInString = [];
  if (lengthName >= 3) {
    for (let i = 0; i < lengthName; i++) {
      if (
        !vowelArray.includes(stringNameUpperCase[i]) &&
        stringNameUpperCase[i] != undefined
      ) {
        consonantInString.push(stringNameUpperCase[i]);
      } else {
        vowelInString.push(stringNameUpperCase[i]);
      }
    }
    if (consonantInString.length > 3) {
      resultName += consonantInString[0];
      resultName += consonantInString[2];
      resultName += consonantInString[3];
    } else if (consonantInString.length == 3) {
      for (let i = 0; i < consonantInString.length; i++)
        resultName += consonantInString[i];
    } else {
      for (let i = 0; i < consonantInString.length; i++) {
        resultName += consonantInString[i];
      }
      resultName += vowelInString[0];
    }
    return resultName;
  } else {
    for (let i = 0; i < lengthName; i++) {
      if (!vowelArray.includes(stringNameUpperCase[i])) {
        resultName += stringNameUpperCase[i];
      } else {
        vowelInString.push(stringNameUpperCase[i]);
      }
    }
    if (vowelInString.length > 0) {
      resultName += vowelInString;
    }
    resultName += "X";
    return resultName;
  }
}

function GenderAndDOB(gender, dob) {
  const months = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "H",
    7: "L",
    8: "M",
    9: "P",
    10: "R",
    11: "S",
    12: "T",
  };
  var dobArray = dob.trim().replace(/\s+/g, "").split("/");
  var codeYear = dobArray[2].substr(2);
  var codeMonths = months[dobArray[1]];
  var codeDay = "";
  var result = "";
  console.log(dobArray);
  if (gender.trim().replace(/\s+/g, "").toUpperCase() == "M") {
    if (parseInt(dobArray[0]) < 10) {
      codeDay = "0" + dobArray[0];
    } else {
      codeDay = dobArray[0];
    }
  } else if (gender.trim().replace(/\s+/g, "").toUpperCase() == "F") {
    let day = parseInt(dobArray[0]) + 40;
    codeDay += day;
  }
  result += codeYear + codeMonths + codeDay;
  return result;
}

function FiscalCode(personalData) {
  var surNameResult = surName(personalData.surname);
  var name = Name(personalData.name);
  var genderAndDOB = GenderAndDOB(personalData.gender, personalData.dob);
  return surNameResult + name + genderAndDOB;
}

console.log(
  FiscalCode({
    name: "Matt",
    surname: "Edabit",
    gender: "M",
    dob: "1/1/1900",
  })
);
console.log(
  FiscalCode({
    name: "Helen",
    surname: "Yu",
    gender: "F",
    dob: "1/12/1950",
  })
);
console.log(
  FiscalCode({
    name: "Mickey",
    surname: "Mouse",
    gender: "M",
    dob: "16/1/1928",
  })
);
