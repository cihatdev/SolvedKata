function solution(string) {
  let arr = "";
  string.split("").forEach((element, i) => {
    if (element === element.toUpperCase()) {
      arr += " " + element;
    }
    else {
      arr += element;
    }
  });
  return arr
}


console.log('solution(\'camelCasingTest\')', solution('camelCasingTest'))