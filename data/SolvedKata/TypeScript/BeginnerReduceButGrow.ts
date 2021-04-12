export function grow(arr: number[]): number {
  return arr.reduce((arr, element) => {
    return (arr *= element);
  }, 1);
}

// export const grow = (arr: number[]) => arr.reduce((accum, it) => accum * it);



let out: number = grow([1, 2, 3]);
console.log(out);
