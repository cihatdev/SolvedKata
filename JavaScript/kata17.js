// Argüman olarak bir dizi (dizi) verildiğinde, gülen yüzlerin toplam sayısını döndürmesi gereken countSmileys işlevini tamamlayın.

// Güler yüz için kurallar:

// Her gülen yüz geçerli bir çift göz içermelidir. Gözler şu şekilde işaretlenebilir: veya;
// Bir gülen yüzün burnu olabilir ama olması gerekmez. Burun için geçerli karakterler - veya ~
// Her gülen yüzün ya) ya da D ile işaretlenmesi gereken gülümseyen bir ağzı olmalıdır.
// Belirtilenler dışında ek karakterlere izin verilmez.

// Geçerli gülen yüz örnekleri: :): D ;-D: ~)
// Geçersiz gülen yüzler:; (:>:}:]


//return the total number of smiling faces in the array
function countSmileys(arr) {
  console.log(arr);
  let counter = 0;
  arr.forEach(index => {
    if (index[0] == ':' || index[0] == ';') {
      if (index[1] == '-' || index[1] == '~') {
        if (index[2] == ')' || index[2] == 'D') {
          counter++;
          console.log(index);
        }
      }
      else {
        if (index[1] == ')' || index[1] == 'D') {
          counter++;
          console.log(index);
        }
      }
    }
  });
  return counter;
}





let out = countSmileys([':)', ';(', ';}', ':-D']);
console.log(out);