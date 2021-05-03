// function parse(data) {
//   let value = 0, arr = [];
//   data.split("").forEach(x => {
//     if (x === "i") {
//       value += 1;
//     }
//     if (x === "s") {
//       value = value ** 2;
//     }
//     if (x === "d") {
//       value -= 1;
//     }
//     if (x === "o") {
//       arr.push(value)
//     }
//   })
//   return arr
// }

// function parse(data) {
//   let res = [];
//   data.split('').reduce((cur, s) => {
//     if (s === 'i') cur++;
//     if (s === 'd') cur--;
//     if (s === 's') cur = Math.pow(cur, 2);
//     if (s === 'o') res.push(cur);
//     return cur;
//   }, 0);
//   return res;
// }


// const parse = data => {
//   const Commands = {
//     INCREMENT: 'i',
//     DECREMENT: 'd',
//     SQUARE: 's',
//     OUTPUT: 'o'
//   }

//   var outputs = [],
//     value = 0;

//   data.split('').forEach(command => {
//     switch (command) {
//       case Commands.INCREMENT: value++; break;
//       case Commands.DECREMENT: value--; break;
//       case Commands.SQUARE: value = Math.pow(value, 2); break;
//       case Commands.OUTPUT: outputs.push(value); break;
//     }
//   });

//   return outputs;
// }



console.log('parse("iiisdoso")', parse("iiisdoso"))