String.prototype.camelCase = function () {
  if (this.length == 0) {
    return ""
  }
  let arr = this.split(""), newArr = [];
  console.log(this);
  arr[0] = arr[0].toUpperCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === " ") {
      if (arr[i + 1])
        newArr.push(arr[i + 1].toUpperCase())
      arr.splice(i, 0)
      i++
    }
    else {
      newArr.push(arr[i])
    }
  }
  return newArr.join("")
}



String.prototype.camelCase=function(){
  //your code here

  string = this.split('');
  if(string[0])
  string[0] = string[0].toUpperCase();
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      if(string[i+1])
      string[i + 1] = string[i + 1].toUpperCase();
      string.splice(i, 1);
      i--;
    }
  }
  return string.join('');
}

console.log('" camel case word".camelCase()', "say hello ".camelCase())
