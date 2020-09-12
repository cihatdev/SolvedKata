//verilen sayıya kadar karesi alınacak ve içinde belirtilen sayılar kadar sayac +1 yap


function nbDig(n, d) {
  let string = "";
  d.toString();
  for (let i = 1; i < n; i++) {
    let val = i ** 2
    val.toString().split(" ");
    string = val.toString();
    if (string.charAt(i) === d) {

      console.log(string);
    }
  }
  return
}

let out = nbDig(10, 9);
console.log("******************");
console.log(out);


let kullanici = 'Ahmet',
  age = 25,
  mesaj = 'Merhaba';