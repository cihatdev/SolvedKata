export class G964 {
  public static race = (v1, v2, g) => {
    let tortoiseFtPerSec = v1 / 3600;
    let hareFtPerSec = v2 / 3600;
    for (let t = 0; t <= 18000; t++) {
      if (
        Math.round(t * tortoiseFtPerSec + g) === Math.round(t * hareFtPerSec)
      ) {
        if (t >= 3600) {
          var hours = Math.round(t / 60 / 60);
          var minutes = Math.round((t / 60) % 60);
          var seconds = Math.round((t / 60 / 60) % 60);
        }
        if (t >= 60 && t < 3600) {
          var hours = 0;
          var minutes = Math.round(t / 60);
          var seconds = Math.round(t % 60);
        }
        if (t < 60) {
          var hours = 0;
          var minutes = 0;
          var seconds = t;
        }
        return [hours, minutes, seconds];
      }
    }
    return [-1, -1, -1];
  };
}

let out = G964.race(80, 91, 37);
console.log(out);

