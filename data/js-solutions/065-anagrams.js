function anagrams(word, words) {
  let arrWord = word.split(""), result;
  result = words.filter(function (x) {
    if (x.length === word.length) {
      if (x.split("").sort().join("").toLowerCase().includes(arrWord.sort().join("").toLowerCase())) {
        return x;
      }
    }
  })
  return result
}



console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'raecr']));







// function anagrams(word, words) {
//   const set = word.split("").reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});
//   let value;
//   console.table(set);
//   const set2 = words.forEach(element => {
//     value = element.split("").reduce((acc, cur) => {
//       acc[cur] = (acc[cur] || 0) + 1;
//       return acc;
//     }, {});
//     // console.log(value);


//   });
// }