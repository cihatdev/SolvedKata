function disemvowel(str) {
  let value = ["a", "e", "o", "i", "u", ""];
  let vowels = value + value.map(x => x.toUpperCase());
  let res = "";
  str.split("").forEach(element => {
    if (!vowels.includes(element) || element == ",") {
      res += element;
    }
  });
  return res;
}

let answer = "Ths wbst s fr lsrs LL!";
if (answer === disemvowel("What are you, a communist?")) {
  console.log("true");
}