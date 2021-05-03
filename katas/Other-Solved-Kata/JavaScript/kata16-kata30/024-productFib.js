//fibonacci numbers

function productFib(prod) {
  let find = false, temp, a = 1, b = 0, result = 0, arr = [], isFalse = true;
  do {
    temp = a;
    a += b;
    b = temp;
    result = a * b;
    if (result == prod) {
      find = true;
      console.log(result);

      break;
    }

    console.log(result);
  } while (b * a < prod)
  if (b * a === prod) {
    find = true;
  }
  arr.push(b);
  arr.push(a);
  arr.push(find);
  return arr
}
let out = productFib(447577);
console.log(out);