// 1.question
let marks = parseInt(prompt('Enter the marks:', 0));
if (marks>=90&&marks<=100) {
     console.log('A');
}else if (marks>=70&&marks<90) {
     console.log('B');
}else if (marks>=60&&marks<70) {
     console.log('C');
}else if (marks>=50&&marks<60) {
     console.log('D');  
} else {
     console.log('F');
}
// 2.question
let month = prompt('Enter the month name:');
if (month == 'September' || month == 'October' || month == 'November') {
     console.log('The season is Autumn');
} else if (month == 'December' || month == 'January' || month == 'February') {
     console.log('The season is Winter');
} else if (month == 'March' || month == 'April' || month == 'May') {
     console.log('The season is Spring');
} else if (month == 'June' || month == 'July' || month == 'August') {
     console.log('The season is Summer');
} else {
     console.log('Invalid month');
}
// 3.question
let day = prompt('What is the day today?','Enter only days.').to;
if (day.toLowerCase() == 'saturday' || day.toLowerCase() == 'sunday') {
     console.log(`${day} is a weekend.`);
} else {
     console.log(`${day} is a working day.`);
     
}