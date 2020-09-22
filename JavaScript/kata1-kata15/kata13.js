//İki sayıyı toplayan ve toplamlarını ikili olarak döndüren bir işlev uygulayın. 
//Dönüştürme, eklemeden önce veya sonra yapılabilir.
//Döndürülen ikili sayı bir dize olmalıdır.

// function addBinary(a, b) {
//   return (a + b).toString(2);
// }

// const addBinary = (a, b) => (a + b).toString(2);

function addBinary(a, b) {
  let c = a + b;
  let res = '';
  while (c >= 1) {
    res = c % 2 + res;
    c = Math.floor(c / 2);
    console.log(res);
  }
  return res;
}

let out = addBinary(1, 9);
console.log("******************");
console.log(out);
