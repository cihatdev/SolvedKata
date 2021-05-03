function likes(names) {
  let lengthNames = names.length, text = "likes this", text2 = "like this";
  console.log(lengthNames);
  if (lengthNames === 0) {
    return "no one likes this";
  }
  else if (lengthNames === 1) {
    return `${names[0]} ${text}`
  }
  else if (lengthNames === 2) {
    return `${names[0]} and ${names[1]} ${text2}`
  }
  else if (lengthNames === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} ${text2}`
  }
  else if (lengthNames === 4 || lengthNames > 4) {
    return `${names[0]}, ${names[1]} and ${lengthNames - 2} others ${text2}`
  }
}







console.log(likes(['Alex', 'cihar']));