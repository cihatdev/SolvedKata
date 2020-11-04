// function alphabetWar(battlefield) {
//   let battleAreas = battlefield.split("");
//   console.log(battleAreas);
//   let counter = 0;
//   battleAreas.map(a => {
//     a === "[" ? counter++ : a;
//   })

//   console.log(counter);
//   return "oops";
// }


function alphabetWar(battleField) {
  const strike = '#';
  let underAttack = battleField.contains(strike);
  if (!underAttack) {
    return battleField.replace("[", string.Empty).replace("]", string.Empty);
  }
  let survivors = new StringBuilder();
  let shelterAreaRegex = new Regex("(?'s1'[^\]]*)\[(?'s'[a-z]+)\](?'s2'[^\[]*)");
  while (shelterAreaRegex.IsMatch(battleField)) {
    let m = shelterAreaRegex.Match(battleField);
    let shelterPopulation = m.Groups["s"].Value;
    let frontStrikesCount = m.Groups["s1"].Value.Count(c => c == strike);
    let behindStrikesCount = m.Groups["s2"].Value.Count(c => c == strike);
    if (frontStrikesCount + behindStrikesCount < 2) {
      survivors.Append(shelterPopulation);
    }
    battleField = battleField.replace(m.Value, m.Groups["s2"].Value);
  }
  return survivors.ToString();
}


let out = alphabetWar('[ab]adfd[dd]##[abe]dedf[ijk]d#d[h]#'); //abijk

console.log(out);
