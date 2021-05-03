function humanReadable(seconds) {
  //seconds / 60 ==> mins
  let day = Math.floor((seconds / 3600) / 24);
  let hour = Math.floor(seconds / 3600);
  let min = Math.floor((seconds % 3600) / 60);
  let sec = Math.floor((seconds % 3600) % 60);
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (hour < 10) {
    hour = "0" + hour;
  }
  return `${day}:${hour}:${min}:${sec}`;
}


console.log(humanReadable(54435345360));