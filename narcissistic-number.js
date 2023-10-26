function narcissistic(value) {
  // split into Array
  const arr = value.toString().split("");

  // loop then calculate each value using ** arr.length
  const getPow = arr.map((val) => parseInt(val) ** arr.length);

  //then sum all value
  const sum = getPow.reduce((prev, current) => prev + current);

  //if same as sum then return true, if not same then return false
  return value === sum;
}

console.log(narcissistic(153));
