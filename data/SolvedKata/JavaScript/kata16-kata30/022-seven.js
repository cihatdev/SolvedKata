// Bu sefer fonksiyonları kullanarak hesaplamalar yazmak ve sonuçları almak istiyoruz. Bazı örneklere bir göz atalım:

// yedi (kez (beş ())); // 35 döndürmeli
// dört (artı (dokuz ())); // 13 döndürmeli
// sekiz (eksi (üç ())); // 5 döndürmeli
// altı (bölünmüşBy (iki ())); // 3 döndürmeli
// Gereksinimler:

// 0'dan ("sıfır") 9'a ("dokuz") kadar her sayı için bir işlev olmalıdır
// Aşağıdaki matematik işlemlerin her biri için bir işlev olmalıdır: plus, minus, times, dividedBy (divided_by, Ruby ve Python'da)
// Her hesaplama tam olarak bir işlem ve iki sayıdan oluşur
// En dıştaki işlev sol işleneni temsil eder, en iç işlev sağ işleneni temsil eder
// Bölme, tamsayı bölme olmalıdır. Örneğin, bu 2.666666 değil 2 döndürmelidir ...:


function zero(op) { return recur(0, op); }
function one(op) { return recur(1, op); }
function two(op) { return recur(2, op); }
function three(op) { return recur(3, op); }
function four(op) { return recur(4, op); }
function five(op) { return recur(5, op); }
function six(op) { return recur(6, op); }
function seven(op) { return recur(7, op); }
function eight(op) { return recur(8, op); }
function nine(op) { return recur(9, op); }

function recur(n, op) {
  return (op) ? op.call(op, n) : n;
}

function plus(num) {
  return function (res) {
    return res + num;
  }
}
function minus(num) {
  return function (res) {
    return res - num;
  }
}
function times(num) {
  return function (res) {
    return Math.floor(res * num);
  }
}
function dividedBy(num) {
  return function (res) {
    return Math.floor(res / num);
  }
}


let out = seven(times(five()));
console.log(out);