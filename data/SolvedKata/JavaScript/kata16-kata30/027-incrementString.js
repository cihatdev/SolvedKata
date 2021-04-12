// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100


// function incrementString(strng) {
//   let arr, number = "";
//   let newArr = strng.split('');
//   newArr.map(num => {
//     if (num >= '0' && num < '9') {
//       number += num;
//     }
//   })
//   let value = (parseInt(number) + 1).toString();
//   console.log(number);
//   while (value.length < number.length) {
//     value = "0" + value;
//   }
//   newArr.forEach(i => {
//     if (i >= '0' && i < '9') {
//       const index = newArr.indexOf(i, 2);
//       if (index > -1) {
//         newArr.splice(index, 567);
//       }
//     }
//   });
//   console.log(value);
//   console.log(newArr);
//   return (newArr.concat(value.split(''))).toString();
// }
function incrementString(strng) {
  let string = strng.replace(/[0-9]/g, '');
  console.log(string);
  let len = strng.length - string.length;
  let str = strng.slice(string.length) || "0";
  str = (parseInt(str) + 1).toString();
  while (str.length < len) {
    str = "0" + str;
  }
  return string.concat(str);
}


// let incrementString = str => str.replace(/([0-8]|\d?9+)?$/, (e) => e ? + e + 1 : 1)

let out = incrementString("foobar");
console.log(out);