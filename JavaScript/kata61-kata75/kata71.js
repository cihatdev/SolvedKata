// function scramble(str1, str2) {
//   let counterLetter1 = str1.split("").reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc;
//   }, {});
//   return str2.split('').every(v => {
//     console.log(counterLetter1[v]);
//     return counterLetter1[v]-- > 0
//   });
// }

// function scramble(str1, str2) {
//   let array1 = str1.split("").sort();
//   let array2 = str2.split("").sort();
//   let i = 0;
//   for (var x = 0; i < array2.length && x <= array1.length; x++) {
//     if (array2[i] === array1[x]) {
//       i++;
//     }
//   }
//   return (x <= array1.length);
// }

// function scramble(str1, str2) {
//   let splitString1 = str1.split('');
//   let splitString2 = str2.split('');
//   let results = [];

//   for (let i = 0; i < splitString1.length; i++) {
//     if (splitString2.indexOf(splitString1[i]) !== -1) {
//       results.push(splitString1[i]);
//       splitString2.splice(splitString2.indexOf(splitString1[i]), 1);

//       if (results.length === str2.length) return true;
//     }
//   }
//   if (results.length !== str2.length) return false;
// }
// function scramble(str1, str2) {
//   const reducer = (container, element) => {
//     if (container[element] === undefined) {
//       container[element] = 1;
//       return container;
//     } else {
//       container[element] += 1;
//       return container;
//     }
//   }
//   let container1 = str1.split('').reduce(reducer, {});

//   let container2 = str2.split('').reduce(reducer, {});

//   for (let prop in container2) {
//     if (!container1[prop]) return false;

//     if (container1[prop] < container2[prop]) return false;
//   }
//   return true;
// }

// function scramble(s1, s2) {
//   if (s1.length < s2.length) return false;

//   const _s2 = s2.split("");

//   s1.split("").forEach(val => {
//     if (_s2.includes(val)) _s2.splice(_s2.indexOf(val), 1);
//   });

//   return _s2.length == 0;
// }


// function scramble(str1, str2) {
//   let hashtab = [...new Array(256)].map(x => 0);
//   str2.split('').forEach(ele => {
//     hashtab[ele.charCodeAt(0)]++
//   });
//   str1.split('').forEach(ele => {
//     hashtab[ele.charCodeAt(0)]--
//   });

//   hashtab = hashtab.filter(x => x > 0);

//   return hashtab.length == 0;
// }

// function scramble(str1, str2) {
//   let count = Object.create(null);
//   Array.prototype.forEach.call(str1, (a) => {
//     count[a] = (count[a] || 0) + 1
//   })
//   return Array.prototype.every.call(str2, (a) => {
//     return count[a]--;
//   })
// }


// function scramble(str1, str2) {
//   let alph = str1.split('').reduce((p, c) => { return p[c] = (p[c] || 0) + 1, p; }, {});
//   console.log(alph);
//   return str2.split('').every(v => alph[v]-- > 0);
// }


function scramble(str1, str2) {
  var count = {};

  [].forEach.call(str1, (a) => {
    count[a] = (count[a] || 0) + 1;
  });

  return [].every.call(str2, (a) => {
    return count[a]--;
  });
}







console.log(scramble('jscripts', 'javascript'));




