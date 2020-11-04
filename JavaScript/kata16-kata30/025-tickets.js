// function tickets(peopleInLine) {
//   let top = peopleInLine.reduce((total, x) => {
//     return total += x;
//   }, 0)
//   console.log(top);
//   if (top / peopleInLine.length > 0) {
//     return "YES"
//   } else {
//     return "NO"
//   }
// }

// function tickets(peopleInLine) {
//   var moneyPool = { 25: 0, 50: 0, 100: 0 };
//   var flag = true;
//   peopleInLine.every(function (value) {
//     moneyPool[value] += 1;
//     if (value === 50) {
//       if (moneyPool[25] > 0) {
//         moneyPool[25] -= 1;
//         return true;
//       }
//       flag = false;
//       return false;
//     } else if (value === 100) {
//       if (moneyPool[25] > 0 && moneyPool[50] > 0) {
//         moneyPool[25] -= 1;
//         moneyPool[50] -= 1;
//         return true;
//       }
//       if (moneyPool[25] > 2) {
//         moneyPool[25] -= 3;
//         return true;
//       }

//       flag = false;
//       return false;

//     }
//     return true;
//   });
//   if (flag) return "YES";
//   else return "NO";
// }



function tickets(peopleInLine){
  let [c25,c50,c100] = [0,0,0];
  for(let v of peopleInLine) {
    if(v===25) c25++;
    if(v===50) {c50++; c25--;}
    if(v===100) {c25--; c50>0?c50--:c25-=2;}
    if(c25<0||c50<0) return 'NO'
  }
  return 'YES'
}


let out = tickets([25, 100])
console.log(out);

