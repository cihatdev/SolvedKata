// function duplicateCount(text) {
//   let counter = 0;
//   let soltingObject = {};
//   text.split("").map(str => {
//     if (!soltingObject.hasOwnProperty(str)) {
//       soltingObject[str] = 0;
//     }
//     else {
//       if (soltingObject[str] === 0) {
//         counter += 1;
//       }
//       soltingObject[str] = soltingObject[str] + 1;
//     }
//   })
//   return counter
// }


//other solutions
// function duplicateCount(text) {
//   var nText = text.toLowerCase(); //this changes every character to lower case 
//   var myObj = []; // Declaring an empty array
//   var counter = 0;
//   for (var i = 0; i < nText.length; i++) {
//     // assigning character as property and giving value 1 
//     if (!myObj[nText[i]]) {
//       console.log(myObj);
//       myObj[nText[i]] = 1;
//     }//checking if character already added
//     else if (myObj[nText[i]] < 2) {
//       myObj[nText[i]] += 1;
//       counter++;
//     }
//   }
//   return counter;
// }


//other solutions

// function duplicateCount(text) {
//   return text.toLowerCase().split('').filter((val, i, arr) => {
//     console.log(arr.indexOf(val) !== i && arr.lastIndexOf(val) === i);
//     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
//   }).length;
// }


//other solutions

// function duplicateCount(text) {
//   var lower = text.toLowerCase();
//   var count = 0;
//   var used = [];

//   lower.split('').forEach(function (letter) {
//     if (!used.includes(letter) && (lower.split(letter).length - 1) > 1) {
//       count++;
//       used.push(letter);
//       console.log(lower.split(letter));
//     }
//   });

//   return count;
// }

//other solutions


function duplicateCount(text) {

  var input = text.toLowerCase().split('');
  var obj = [];
  for (var i in input) {
    if (!obj[input[i]]) {
      obj[input[i]] = 1;
    } else {
      obj[input[i]] += 1;
    }
  }
  var result = 0;
  for (var prop in obj) {
    if (obj[prop] > 1) {
      result++;
    }
  }
  return result;
}


let output = duplicateCount("aabbccdd");

console.log(output);