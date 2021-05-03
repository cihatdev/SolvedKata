/*function highAndLow(numbers) {
  let number = numbers.split(" ");
  for (let item of number) {
    item = Number(item)
  }
  console.log(number);
  let big = number[0];
  let small = numbers[0];
  for (let item of number) {
    item = Number(item);
    if (item < small) {
      small = item;
    }
    if (item > big) {
      big = item;
    }
  }
  number = String(number)
  let out = big + " " + small
  return out
}*/
//First Method
// function highAndLow(numbers) {
//   numbers = numbers.split(' ').map(Number);
//   return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
// }
//Second Method
// function highAndLow(numbers){
//   numbers = numbers.split(' ');
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }
//Third Method
// function highAndLow(numbers) {
//   var arr = numbers.split(" ");
//   return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
// }
//Fourth Method
function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number)

  var min = Math.min.apply(null, numbers)
  var max = Math.max.apply(null, numbers)

  return max + ' ' + min
}
//Fifth Method
function highAndLow(numbers){
  numbers = numbers.split(' ');
  
  return Math.max(...numbers) + ' ' + Math.min(...numbers);
}

let output = highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")

console.log(output);