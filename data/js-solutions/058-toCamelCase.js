function toCamelCase(str) {
  let strCamelCase = '';
  for (var i = 0; i < str.length; i++) {
    let elem = str[i];
    if (elem === '-' || elem === '_') {
      strCamelCase += str[i + 1].toUpperCase();
      i++
    } else {
      strCamelCase += elem;
    }
  }
  return strCamelCase;
}



console.log(toCamelCase("the_stealth_warrior"));