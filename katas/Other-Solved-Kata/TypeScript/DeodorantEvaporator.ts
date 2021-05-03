function evaporator(content, evap_per_day, threshold) {
  content = 0;
  let result = 0,
    percentage = 100;
  while (percentage > threshold) {
    percentage = percentage - percentage * (evap_per_day / 100);
    result += 1;
  }
  return result;
}

// export const evaporator = (netContent = 100, evapPerDay, threshold) => {
//   let nthDay = 0;
//   while (netContent >= threshold) {
//     netContent -= netContent * (evapPerDay / 100);
//     nthDay++;
//   }
//   return nthDay;
// };

let out = evaporator(10, 10, 10);
console.log(out);
