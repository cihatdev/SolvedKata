function spinWords(sentence) {
  let res = "";
  sentence.split(" ").forEach(element => {
    res += element.length >= 5 ? element.split("").reverse().join('') + " " : element + " ";
  });
  let arr2 = res.split(" ")
  arr2.splice(arr2.length - 1, 1)
  console.log(arr2);
  return arr2.join(" ")
}







console.log(spinWords("Seriously this is the last one"));