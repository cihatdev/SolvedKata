// function solution(roman) {
//   let arr = roman.split("");
//   let conversion = { 'M': 1000, 'D': 500, 'C': 100, 'L': 50, 'X': 10, 'V': 5, 'I': 1 };
//   let total = 0, current, currentValue, next, nextValue;
//   console.log(conversion[1000]);
//   for (let i = 0; i < arr.length; i++) {
//     current = arr[i];
//     // console.log(current);
//     // console.log(conversion[current]);
//     currentValue = conversion[current]
//     next = arr[i + 1];
//     nextValue = conversion[next];
//     if (currentValue < nextValue) {
//       total -= currentValue;
//     } else {
//       total += currentValue;
//     }
//   }
//   return total
// }

const data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
function solution(roman) {
  let numbers = roman.split("");
  let sum = 0, i;
  for (i = 0; i < numbers.length; i++)
    if (data[numbers[i]] < data[numbers[i + 1]]) {
      sum += data[numbers[i + 1]] - data[numbers[i]];
      i++;
    } else {
      sum += data[numbers[i]];
    }
  return sum
}







console.log('solution(\'MDCLXVI\')', solution('MDCLXVI'))