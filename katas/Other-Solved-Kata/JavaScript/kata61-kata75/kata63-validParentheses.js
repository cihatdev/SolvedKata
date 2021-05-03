// function validParentheses(parens) {
//   let newArr = parens.split(""), n = 0;
//   console.log(newArr);
//   newArr.filter((x) => x === '(' ? n++ : n--);
//   console.log(n);
//   if (n > 0) {
//     return true
//   }
//   return n == 0;
// }

// function validParentheses(parens) {
//   let stack = [];
//   let map = { '(': ')' };
//   for (let i = 0; i < parens.length; i++) {
//     if (parens[i] === '(') {
//       stack.push(parens[i])
//     }
//     else {
//       let last = stack.pop();
//       if (parens[i] !== map[last]) {
//         return false;
//       }
//     }
//   }
//   if (stack.length !== 0) {
//     return false;
//   }

//   return true;
// }


function validParentheses(parens) {
  var indent = 0;

  for (var i = 0; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;
  }

  return (indent == 0);
}

console.log(validParentheses("((((((((())))))))))))))"));