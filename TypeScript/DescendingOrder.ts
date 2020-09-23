export function descendingOrder(n: number): number {
  let arr: string = String(n);
  return Number(
    arr
      .split("")
      .sort((a: string, b: string) => Number(b) - Number(a))
      .join("")
  );
}

// export function descendingOrder(n: number | null | undefined): number | null | undefined {
//   return n ? parseInt(n.toString().split("").sort().reverse().join("")) : n;
// }


// export function descendingOrder(n: number) {
//   let charArray: string[] = String(n).split("");
//   let sortedString: string = charArray.sort((c1, c2) => Number(c2) - Number(c1)).join("");
//   return Number(sortedString);
// }


// export function descendingOrder(n: number): number {
//   const sNumber = n.toString().split('');

//   return parseInt(
//          sNumber
//            .map(num => parseInt(num))
//            .sort((a, b)=> b - a)
//            .join('')
//          );
// }

// export function descendingOrder(n: number) {
//   return parseInt(n.toString().split('').sort((a, b) => a > b ? -1 : 1).join(''));
// }



descendingOrder(123456789);
