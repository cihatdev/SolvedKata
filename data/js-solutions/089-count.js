// function count(string) {
//   if (string.length === 0) return {}
//   return string.split("").reduce((acc, cur) => {
//     acc[cur] = ((acc[cur] || 0) + 1)
//     return acc;
//   }, {})
// }


// function count(string) {
//   var count = {};
//   string.split('').forEach((s) => {
//     console.log(s);
//     count[s] ? count[s]++ : count[s] = 1;
//   });
//   return count;
// }

// function count(string) {
//   var result = {};
//   for (let i = 0; i < string.length; i++) {
//     result.hasOwnProperty(string[i]) ? result[string[i]] += 1 : result[string[i]] = 1;
//   }
//   return result;
// }




console.log('count("aba")', count("aba"))