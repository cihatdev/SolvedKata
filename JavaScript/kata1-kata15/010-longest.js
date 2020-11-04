// function longest(s1, s2) {
//   s1.toLowerCase().split("").sort();
//   s2.toLowerCase().split("").sort();
//   console.log(s2.length);
//   let longtemp, smalltemp;
//   let exits;
//   if (s1.length > s2.length) {
//     longtemp = s1
//     smalltemp = s2
//   }
//   else {
//     longtemp = s2
//     smalltemp = s1;
//   }
//   longtemp.toLowerCase().split("").sort().every(letter => {
//     letter === smalltemp ? 
//   })
//   return exits;
// }


// function longest(s1, s2) {
//   var result = "";
//   let sayac = 0;

//   for (var i = 0; i < s1.length; i++) {
//     if (result.indexOf(s1[i]) === -1) {
//       console.log(s1[i]);
//       result += s1[i];
//       sayac++;
//     }
//   }

//   for (var i = 0; i < s2.length; i++) {
//     if (result.indexOf(s2[i]) === -1) {
//       result += s2[i];
//       console.log(s1[i]);

//     }
//   }
//   console.log(sayac);
//   return result.split('').sort().join('');
// }

// const longest = (s1, s2) => [...new Set(s1 + s2)].sort().join('')

// function longest(s1, s2) {
//   return Array.from(new Set(s1 + s2)).sort().join('');
// }


function longest(s1, s2) {
  // your code
  s3 = s1 + s2;
  s4 = s3.split("");
  s4 = s4.sort().filter(function(element, index, array){
    return element !== array[index - 1];
  });
  return s4.join("");
}

let out = longest("aretheyhere", "yestheyarehere");
console.log(out);