// "use strict";
//hatalıdır.
// num = 5;
// console.log(num);

// console.log(Array.from('foo'));
// // expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], x => x + x));
// // expected output: Array [2, 4, 6]

// dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Array.from(dizi, x => x * 2).length); 

// let x = "Cihat";
// console.log(typeof undefined);
// console.log(Math.SQRT1_2);
// let number = 12345;
// console.log(String(number) + "--> type of : " + typeof (String(number)));
// console.log(String(x) + "--> type of : " + typeof (Number(x)));
// console.log(x * 2);


// Javascript dilinde 7 tane basit tip bulunmaktadır.

// number her türlü sayı için ( integer veya floating point)
// string bir veya birden fazla karakter için
// boolean , true/false yani doğru-yanlış değerleri için.
// null bilinmeyen değerler için.
// undefined değer atanmamış değişkenler için.
// object daha karmaşık veri yapıları için.
// symbol eşsiz tanımlamalar için.

// let elma = "2";
// let portakal = "3";

// // her iki değer de binary toplama işleminden önce sayıya çevrilmişlerdi
// console.log(typeof (+elma)); // 5
// let x = [1, 2, 3, 4, 5, 6]
// for (const i in x) {
//   console.log(++x[i]);
// }

// let a = (1 + 2, 3 + 4);

// console.log(a); // 7 (3 + 4 işleminin sonucu)

// console.log(Boolean("0"));
// console.log(0 == false != undefined);

// let firma = 'Netscape2';
// (firma == 'Netscape') ?
//   console.log('Doğru!') : (firma == "Netspaca2") ? console.log("Dogrudur") : console.log("YAnlıştır.");



// for (let i = 0; i < 10; i++) {

//   // Eğer 2'ye bölünebiliyorsa bir sonraki adıma atlar.
//   if (i / 2 == 2) continue;
//   console.log(i); // ekranda 1, 3, 5, 7, 9 değerleri gösterilir.
// }


function sor(soru, evet, hayir) {
  if (confirm(soru)) evet()
  else hayir();
}

sor(
  "Kabul ediyor musun?",
  () => alert("Kabul ettin."),
  () => alert("Çalışmasını durdurdun")
);