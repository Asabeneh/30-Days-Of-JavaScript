// 1.question
let now = new Date();
let hrs = now.getHours(),
     min = now.getMinutes(),
     year = now.getFullYear(),
     mon = now.getMonth(),
     date = now.getDate();
if (hrs < 10) { hrs = '0' + hrs; }
if (min < 10) { min = '0' + min; }
if (mon < 10) { mon = '0' + mon; }
if (date < 10) { date = '0' + date; }
console.log(`${year}-${mon}-${date} ${hrs}:${min}`);