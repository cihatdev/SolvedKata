
function cache(func) {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);

    if (!(key in cache)) {
      console.log(key);
      const result = func.apply(null, args);
      cache[key] = result;
    }

    return cache[key];
  };
}







let complexFunction = function (arg1, arg2) { /* complex calculation in here */ };
let cachedFunction = cache(complexFunction);

console.log(cachedFunction);