//Yerinde bazı koyunların eksik olabileceği bir dizi / koyun listesi düşünün.
//Dizide bulunan koyun sayısını sayan bir işleve ihtiyacımız var (doğru, mevcut demektir).

// function countSheeps(arrayOfSheep) {
//   let counter = 0;
//   arrayOfSheep.filter(x => {
//     x === true ? counter++ : counter
//   })
//   console.log(counter);
//   return counter
// }

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }


// function countSheeps(arrayOfSheep) {
//   var count = 0;
//   arrayOfSheep.forEach(sheep => { sheep ? count++ : count });
//   return count;
// }

// function countSheeps(arrayOfSheep) {
//   var array = arrayOfSheep.reduce((a,b)=>a + (b===true?1:0),0)
//   console.log();
//   return array;
// }

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce(function (result, current) {
    if (current) result++;
    return result;
  }, 0);
}


let arr = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]

let output = countSheeps(arr);

console.log(output);