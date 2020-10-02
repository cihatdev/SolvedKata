function toWeirdCase(string) {
  return string.split(" ").map((element) => {
    return element.split("").map((letter, index) => {
      return index % 2 == 0 ? letter.toUpperCase() : letter.toLowerCase()
    }).join('');
  }).join(' ');
}


console.log('toWeirdCase(\'This is a test\')', toWeirdCase('This is a test'))







// if (index % 2 === 0 && element.charAt(0)) {
//   res += element.toUpperCase()
// }
// else {
//   res += element
// }