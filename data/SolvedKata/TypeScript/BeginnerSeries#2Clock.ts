export function past(h: number, m: number, s: number): number {
  return h * 3600000 + m * 60000 + s * 1000;
}

let out: number = past(1, 1, 1);
console.log(out);

// 1 saniye 1000 milisaniye
// 1dk 60 saniye 60000 milisaniye
// 1saat 60dk 3600 saniye 3600000milisaniye
