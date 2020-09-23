export const reverseSeq = (n: number): number[] => {
  let resultArr: number[] = [];
  for (let i = n; i > 0; i--) {
    resultArr.push(i);
  }
  return resultArr;
};

let out: number[] = reverseSeq(5);
console.log(out);
