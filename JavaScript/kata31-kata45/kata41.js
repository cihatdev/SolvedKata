function canEatWho(eatListOrObj, who) {
  if (Object.prototype.toString.call(eatListOrObj) === '[object Array]') {
    for (let i = 0, len = eatListOrObj.length; i < len; i++) {
      if (eatListOrObj[i] === who) {
        return true;
      }
    }
  }
  return eatListOrObj === who;
}

function getEatRelationStr(a, b) {
  return a + " eats " + b;
}

function whoEatsWho(zoo) {
  console.log(zoo);
  let result = [zoo];
  let eatMap = {
    "antelope": "grass",
    "big-fish": "little-fish",
    "bug": "leaves",
    "bear": ["big-fish", "bug", "chicken", "cow", "leaves", "sheep"],
    "chicken": "bug",
    "cow": "grass",
    "fox": ["chicken", "sheep"],
    "giraffe": "leaves",
    "antelope": "grass",
    "lion": ["antelope", "cow"],
    "panda": "leaves",
    "sheep": "grass",
  };
  let zoos = zoo.split(",");
  console.table(zoos);
  let currentZoo, leftZoo, rightZoo, leftZooIndex, rightZooIndex, moveLeft;
  for (let i = 0, len = zoos.length; i < len; i++) {
    currentZoo = zoos[i];
    if (!currentZoo) {
      continue;
    }
    leftZooIndex = i - 1;
    leftZoo = zoos[leftZooIndex];
    while (leftZoo && canEatWho(eatMap[currentZoo], leftZoo)) {
      result.push(getEatRelationStr(currentZoo, leftZoo));
      zoos.splice(leftZooIndex, 1)
      len = zoos.length;
      leftZooIndex = i - 2;
      leftZoo = zoos[leftZooIndex];
      i = i - 1;
      moveLeft = true;
    }

    if (moveLeft) {
      i = i - 1;
      currentZoo = zoos[i];
      moveLeft = false;
    }
    rightZooIndex = i + 1;
    rightZoo = zoos[rightZooIndex];


    while (rightZoo && canEatWho(eatMap[currentZoo], rightZoo)) {
      result.push(getEatRelationStr(currentZoo, rightZoo));
      zoos.splice(rightZooIndex, 1)
      len = zoos.length;

      rightZooIndex = i + 1;
      rightZoo = zoos[rightZooIndex];
    }
  }
  result.push(zoos.join(","));

  return result;
}

let out = whoEatsWho("fox,bug,chicken,grass,sheep")

console.table(out);