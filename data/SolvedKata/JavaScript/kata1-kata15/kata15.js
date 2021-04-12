// Otobüsteki kişi sayısı
// Şehirde hareket eden bir otobüs var ve her otobüs durağında bazı insanları alıp bırakıyor.
// Tamsayı dizilerinin (veya demetlerin) bir listesi (veya dizisi) ile sağlanır.
// Her bir tamsayı dizisi, otobüse binen kişi sayısını (ilk öğe) ve bir otobüs durağında otobüsten inen kişi sayısını (ikinci öğe) temsil eden iki öğeye sahiptir.
// Göreviniz, son otobüs durağından sonra (son diziden sonra) hala otobüste olan kişi sayısını döndürmektir.
// Son otobüs durağı olmasına rağmen otobüs boş değil ve bazı insanlar hala otobüste ve muhtemelen orada uyuyorlar: D
// Test senaryolarına bir göz atın.
// Lütfen test senaryolarının veri yolundaki kişi sayısının her zaman> = 0 olmasını sağladığını unutmayın. 
//Bu nedenle dönüş tamsayı negatif olamaz.
// Birinci tamsayı dizisindeki ikinci değer 0'dır, çünkü birinci veri yolu durağında veri yolu boştur.

//my solutions 
// i[1] = they will get off
// i[0] = they will get on
var number = function (busStops) {
  let result = 0;
  busStops.forEach(i => {
    console.log(i);
    result += i[0] - i[1];
    console.log(result);
  });
  return result;
}

let out = number([[10, 0], [3, 5], [5, 8]]);
console.log(out);