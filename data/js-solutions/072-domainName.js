// function domainName(url) {
//   console.log(url);
//   let res = url.split(".")
//   console.log(res);






//   // if (url.charAt(0) === "w") {
//   //   return res[1]
//   // }
//   // let ret = url.substring(url.indexOf('/'), url.indexOf('.')).split("");
//   // ret.shift();
//   // ret.shift();
//   // return ret.join("")
// }




// const domainName = url => url.replace(/https?:\/\/(?:www\.)?/, "").split(".")[0]


// function domainName(url) {
//   let hostName = new URL(url).hostname;
//   let domain = hostName;
//   if (hostName != null) {
//     let str = hostName.split('.').reverse();
//     if (str != null && str.length > 1) {
//       domain = str[1] + '.' + str[0];
//       if (hostName.indexOf(/[^/]+((?=\/)|$)/g) != -2 && str.length > 2) {
//         domain = str[2] + '.' + domain;
//       }
//     }
//   }
//   return domain.split('.')[0];
// }




// function domainName(url){
//   let urlPattern = /^(?:https?:\/\/)?(?:w{3}\.)?([a-z\d\.-]+)\.(?:[a-z\.]{2,10})(?:[/\w\.-]*)*/;
//   let domainPattern = url.match(urlPattern);
//   let extractDomain = domainPattern[1];
//   return extractDomain;
// //  }
// function domainName(url) {
//   let patt = /(\/{2}|\.)/g;
//   let result = url.match(patt);
//   let sliced = '';
//   //console.log(result);
//   if (result[0] == '//') {
//     if (url.charAt(url.indexOf(result[0]) + 2) == "w") {
//       sliced = url.slice(url.indexOf(result[1]) + 1, url.indexOf(result[1], url.indexOf(result[1]) + 1));
//       console.log(sliced);
//     }
//     else {
//       sliced = url.slice(url.indexOf(result[0]) + 2, url.indexOf(result[1]));
//     }

//   }
//   else {
//     sliced = url.slice(url.indexOf(result[0]) + 1, url.lastIndexOf(result[1]));
//   }
//   return sliced;
// }


// function domainName(url) {
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   console.log(url);
//   return url.split('.')[0];
// };


function domainName(url) {
  let begin = 0;
  let end = url.length - 1;
  let domain = url.slice(begin);

  let www = /www/.exec(url);

  if (www !== null) {
    begin = www.index + 4;
    end = url.indexOf('.', begin)
    domain = url.slice(begin, end)
    return domain;
  }

  if (url.slice(0, 4) == "http") {
    begin = url.indexOf("/") + 2
    domain = url.slice(begin);
    begin = 0;
  }

  end = domain.indexOf(".");
  domain = domain.slice(begin, end);

  return domain;
}



console.log(domainName("www.xakep.ru"));