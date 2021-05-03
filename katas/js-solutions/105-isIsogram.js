function isIsogram(str){
  str = str.toLowerCase().split("");
  if (str == "") {
    return true
  }
    let object =  str.reduce((counts, char) => {
    counts[char] = (counts[char] || 0) + 1;
    console.log(counts[char])
    return counts;
    }, {})
  console.log(object)
  return Object.entries(object).every(([key, value]) => value > 1 ? false : true)
}


/* function isIsogram(str) {
  return Object.entries(
    str.toLowerCase().split("").reduce((counts, char) => {
      counts[char] = (counts[char] || 0) + 1;
      return counts;
    }, {})
  ).every(([key, value]) => (value > 1 ? false : true));
} */

console.log(isIsogram("moOse"));