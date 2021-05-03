function longestConsec(strarr, k) {
  let n = strarr.length, str = '';
  if (k <= 0 || k > n || n === 0) {
    return "";
  }
  for (let i = 0; i < n; i++) {
    let currentStr = strarr.slice(i, k + i).join('');
    if (currentStr.length > str.length) {
      str = currentStr;
    }
  }
  return str;
}



console.log('longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3)', longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3))