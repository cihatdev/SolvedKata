export function bouncingBall(
  h: number,
  bounce: number,
  window: number
): number {
  let counter: number = 1;
  // your code
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  } else {
    let bounceHight: number = h * bounce;

    while (bounceHight > window) {
      bounceHight = bounceHight * bounce;
      console.log(bounceHight);

      counter += 2;
    }
  }
  return counter;
}

let out: Number = bouncingBall(30.0, 0.66, 1.5);
console.log(out);

// export function bouncingBall(
//   h: number,
//   bounce: number,
//   window: number
// ): number {
//   let counter: number = 1;
//   // your code
//   if ((h < 0 && h > 1) || (bounce < 0 && bounce > 1) || window > h) {
//     return -1;
//   } else {
//     while (h >= window) {
//       h *= bounce;
//       counter++;
//     }
//   }
//   return counter;
// }
