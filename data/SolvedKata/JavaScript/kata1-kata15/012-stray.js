// Size, tek bir sayı dışında hepsinin aynı olduğu tek uzunlukta bir tamsayı dizisi verilir.

// Böyle bir diziyi kabul eden ve o tek farklı sayıyı döndüren yöntemi tamamlayın.

// Girdi dizisi her zaman geçerli olacaktır! (tek-uzunluk> = 3)


// function stray(numbers) {
//   let number = 0
//   numbers.forEach(x => numbers.indexOf(x)  ? number = x : null)
//   return number
// }


// function stray(numbers) {
//   let strayChar = numbers[0];
//   if (strayChar !== numbers[1] && strayChar !== numbers[2]) return strayChar;
//   for (let i = 1; i < numbers.length; i++) {
//     if (strayChar !== numbers[i]) return numbers[i];
//   }
// }

// function stray(numbers) {
//   for (var i in numbers) {
//     if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])) { return numbers[i] }
//   }
// }

// const stray = nums => nums.reduce((a, b) => a ^ b);

// function stray(numbers) {
//   var a = numbers.sort((a, b) => b - a);
//   if (a[0] != a[1]) {
//     console.log(a);
//     return a[0]
//   }
//   console.log(a[6]);

//   return a[a.length - 1]
// }


function stray(nums) {
  let max = Math.max(...nums);
  let min = Math.min(...nums);
  return nums.filter(x => x == max).length == 1 ? max : min
}

let out = stray([17, 17, 3, 17, 17, 17, 17]);
console.log("******************");
console.log(out);





// return numbers.reduce((item, nextItem) => {
//   let temp = item;
//   console.log(temp);
//   if (temp === nextItem) {
//     console.log(item === nextItem);
//   }
//   else {
//     out = indexOF(item);
//   }
//   return out;

// })