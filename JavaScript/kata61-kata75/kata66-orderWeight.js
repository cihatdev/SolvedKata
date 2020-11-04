function orderWeight(strng) {
  let newArr = strng.split(" ").sort((a, b) => a - b);
  console.log(newArr);
  // newArr.forEach(element => {
  //   element.split("").reduce((a, b) => {
  //     console.log(a + " " + b);
  //   })
  // });
  let arrNumber, array = [];
  // for (const i in newArr) {
  //   arrNumber = newArr[i].split("")
  //   console.log(arrNumber);
  //   let sum = arrNumber.reduce((a, b) => Number(a) + Number(b))
  //   console.log(array.push(sum));
  //   console.log(sum);
  // }
  console.log(array.sort((a, b) => a.weight - b));

}

function orderWeight(strng) {
  const sum = (str) => str.split('').reduce((sum, el) => (sum + (+el)), 0);
  function comp(a, b) {
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  };
  return strng.split(' ').sort(comp).join(' ');
}



function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function (v) {
      return {
        val: v,
        key: v.split("").reduce(function (prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function (a, b) {
      return a.key == b.key
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function (v) {
      return v.val;
    })
    .join(" ");
}



function orderWeight(str) {
  const sum = x => x.split('').reduce((res, cur) => (res + +cur), 0);
  return str.split(' ').sort((a, b) => {
    const diff = sum(a) - sum(b);
    return diff == 0 ? (a > b ? 1 : -1) : diff;
  }).join(' ');
}






function digitSum(str) {
  return str.split('').reduce(function (s, e) {
    return s + parseInt(e);
  }, 0);
}

function orderWeight(str) {
  return str.split(' ').sort(function (a, b) {
    return digitSum(a) - digitSum(b) || a.localeCompare(b);
  }).join(' ');
}


function orderWeight(s) {
  return s.split(' ').sort((a, b) => sum(a) - sum(b) || a.localeCompare(b)).join(' ');
}
function sum(s) { return s.split('').reduce((s, v) => s + +v, 0); }








function orderWeight(strng) {
  return strng.split(' ').sort((a, b) => {
    var c = a.split('').reduce((a, b) => Number(a) + Number(b));
    var d = b.split('').reduce((a, b) => Number(a) + Number(b));
    return (c < d) ? -1 : (c > d) ? 1 : a.localeCompare(b);
  }).join(' ');
}




function orderWeight(strng) {
  return strng
    .split(' ')
    .map(number => {
      const weight = number.split('').reduce((a, b) => Number(a) + Number(b), 0)

      return { num: number, weight }
    })
    .sort(
      (a, b) =>
        a.weight === b.weight ? a.num.localeCompare(b.num) : a.weight - b.weight
    )
    .map(({ num }) => num)
    .join(' ')
}

console.log(orderWeight("56 65 74 100 99 68 86 180 90"));