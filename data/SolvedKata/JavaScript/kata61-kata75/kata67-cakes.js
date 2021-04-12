// function cakes(recipe, available) {
//   let arr = [], res = 0, counter = 0;
//   for (const [key, value] of Object.entries(recipe)) {
//     ++counter;
//     for (const [keyAvailable, valueAvailable] of Object.entries(available)) {
//       if (key === keyAvailable) {
//         res = Math.floor(valueAvailable / value);
//         arr.push(res)
//       }
//     }
//   }
//   let resArr = arr.sort((a, b) => a - b)
//   if (resArr.length !== counter) {
//     return 0;
//   }
//   else return resArr[0]
// }

// function cakes(recipe, available) {
//   var numCakes = [];

//   for (var key in recipe) {
//     console.log(recipe);
//     if (recipe.hasOwnProperty(key)) {
//       if (key in available) {
//         numCakes.push(Math.floor(available[key] / recipe[key]));
//       } else {
//         return 0;
//       }
//     }
//   }

//   return Math.min.apply(null, numCakes);

// }


// function cakes(recipe, initial) {
//   // console.log(Object.keys(recipe));
//   return Math.floor(Object.keys(recipe).reduce(function (min, key) {
//     console.log(initial[key]);
//     return Math.min(initial[key] / recipe[key] || 0, min);
//   }, Infinity));
// }


function cakes(recipe, supplies) {
  const numbers = [5, 6, 2, 3, 7];
  console.log(Math.max.apply(Object, numbers));


  var n = [];
  for (var key in recipe)
    if (key in supplies)
      n.push(Math.floor(supplies[key] / recipe[key]));
    else
      return 0;
  return Math.min.apply(Math, n);
}




console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
  { sugar: 500, flour: 2000, milk: 2000 }));