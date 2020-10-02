function diamond(n) {
  if (n <= 0 || n % 2 === 0) {
    return null;
  }
  else {
    let asteriskAmount = n;
    let spaces = 0;
    let diamArr = [];
    while (asteriskAmount >= 1) {
      if (asteriskAmount === n) {
        let initialString = "";
        for (i = 0; i < asteriskAmount; i++) {
          initialString += "*";
        }
        initialString += "\n";
        diamArr.push(initialString);
        asteriskAmount -= 2;
        spaces += 1;
      } else {
        let stringTemp = "";
        for (j = 0; j < spaces; j++) {
          stringTemp += " ";
        }
        for (l = 0; l < asteriskAmount; l++) {
          stringTemp += "*";
        }
        stringTemp += "\n";
        diamArr.unshift(stringTemp);
        diamArr.push(stringTemp);
        asteriskAmount -= 2;
        spaces += 1;
      }
    }
    diam = diamArr.join('');
  }
  return diam;
}


function diamond(n){
  if( n%2==0 || n<1 ) return null
  var x=0, add, diam = line(x,n);
  while( (x+=2) < n ){
    add = line(x/2,n-x);
    diam = add+diam+add;
  }
  return diam;
}//z.


console.log('diamond(25)\n\n', diamond(25))