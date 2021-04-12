function isValidWalk(walk) {
  let northSouth = 0, westEast = 0;
  for (let element of walk) {
    if (element == 'n') northSouth += 1;
    if (element == 's') northSouth -= 1;
    if (element == 'w') westEast += 1;
    if (element == 'e') westEast -= 1;
  }

  return walk.length == 10 && northSouth === 0 && westEast === 0;
}


console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));