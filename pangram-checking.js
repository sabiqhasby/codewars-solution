function isPangram1(value) {
  let strArr = value.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < alphabet.length; i++) {
    if (strArr.indexOf(alphabet[i]) < 0) {
      return false;
    }
  }
  return true;
}

// or

function isPangram2(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
    return string.indexOf(x) !== -1;
  });
}

function isPangram3(string) {
  const alphabetList = [..."abcdefghijklmnopqrstuvwxyz"];

  return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}
