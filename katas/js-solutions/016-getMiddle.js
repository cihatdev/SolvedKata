//my solutions is very good solutions 

// function getMiddle(s) {
//   let midd, out;
//   if (s.length % 2 != 0) {
//     console.log("s length ==> Number is odd");
//     midd = Math.floor(s.length / 2);
//     console.log(midd);
//     out = s[midd];
//   }
//   else {
//     console.log("s length ==>  Number is even");
//     midd = s[Math.floor(s.length / 2 - 1)] + s[(Math.floor(s.length / 2))];
//     out = midd;
//   }
//   return out
// }

// console.log(Math.ceil(.45)); //ceil yukarıya çekiyor ama floor aşağıya çekiyor...

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

let out = getMiddle("middleee");
console.log(out);