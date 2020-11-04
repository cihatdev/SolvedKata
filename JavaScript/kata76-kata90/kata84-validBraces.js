function validBraces(braces) {
  const stack = []
  for (const brace of braces) {
    if (')]}'.includes(brace)) {
      if (isMatchedBraces(stack.pop(), brace)) {
        continue
      }
      return false
    }
    stack.push(brace)
  }
  return !stack.length
}

function isMatchedBraces(left, right) {
  return ['()', '[]', '{}'].some(([l, r]) => l === left && r === right)
}



console.log('validBraces( "[(])" )', validBraces("[(])"))