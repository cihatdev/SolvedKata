const boolToWord = (bool: boolean): string => {
  if (bool === false) {
    return "No";
  } else {
    return "Yes";
  }
};

// export const boolToWord = (bool: boolean): string => {
//   return bool ? "Yes" : "No";
// };

export default boolToWord;

let out: String = boolToWord(true);
console.log(typeof out);
