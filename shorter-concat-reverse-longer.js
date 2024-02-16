// Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

// In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

// Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
// If a and b have the same length treat a as the longer producing b+reverse(a)+b

// THIS IS THE CODE
// function shorterReverseLonger(a,b){
//   let shorter, reverse

//   if(a.length < b.length) {
//   	shorter = a
//     reverse = b.split('').reverse().join("")
//   } else{
//   	shorter = b
//     reverse = a.split('').reverse().join("")

//   }

//   return `${shorter}${reverse}${shorter}`

// }

// THIS IS THE MORE SIMPLER
function shorterReverseLonger(a, b) {
  const shorter = a.length < b.length ? a : b;
  const longer = a.length < b.length ? b : a;
  const reverseLonger = longer.split("").reverse().join("");

  return `${shorter}${reverseLonger}${shorter}`;
}

console.log(shorterReverseLonger("firsee", "abcde"));
