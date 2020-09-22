function rot13(s) {
  return (s ? s : this).split('').map(function (_) {
    if (!_.match(/[A-Za-z]/)) return _;
    c = Math.floor(_.charCodeAt(0) / 97);
    k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
    return String.fromCharCode(k + ((c == 0) ? 64 : 96));
  }).join('');
}




var codeA = 'A'.charCodeAt(0),
  codeZ = 'Z'.charCodeAt(0),
  codea = 'a'.charCodeAt(0),
  codez = 'z'.charCodeAt(0);
function rot13(message) {
  return message.split('').map(function (char) {
    var code = char.charCodeAt(0);
    if (codeA <= code && code <= codeZ) {
      return String.fromCharCode(((code - codeA) + 13) % 26 + codeA);
    } else if (codea <= code && code <= codez) {
      return String.fromCharCode(((code - codea) + 13) % 26 + codea);
    }
    return char;
  }).join('');
}


var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXWZ";
var cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXWZABCDEFGHIJKLM";

function rot13(message) {
  return message.split('').map(function (c) {
    var i = alphabet.indexOf(c);
    if (i < 0) {
      // not in alphabet, return char
      return c;
    }

    return cipher[i];
  }).join('');
}



function rot13(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}




let out = rot13("test");
console.log(out);

