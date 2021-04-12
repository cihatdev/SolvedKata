function validatePIN(pin) {
  pin = pin.split("");
  console.log(pin);
  let isFls = true;
  let leng = pin.length;
  console.log(leng);
  if (leng === 4 || leng === 6) {
    for (let i = 0; i < leng; i++) {
      if (pin[i] > '9' || pin[i] < '0') {
        console.log(pin[i]);
        return false
      }
    }
  }
  else {
    return false;
  }
  return isFls;
}
// pin[i] === "." || pin[i] === '-' || pin[i] < 'Z' || pin[i] > 'A' || pin[i] < 'a' || pin[i] > 'z'

let out = validatePIN("1234")
console.log(out);