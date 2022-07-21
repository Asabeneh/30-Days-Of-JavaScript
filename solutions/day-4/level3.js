// 1.question
let months = [
     {
          month: 'january',
          days:31
     },
     {
          month: 'february',
          days:28
     },
     {
          month: 'march',
          days:31
     },
     {
          month: 'april',
          days:30
     },
     {
          month: 'may',
          days:31
     },
     {
          month: 'june',
          days:30
     },
     {
          month: 'july',
          days:31
     },
     {
          month: 'august',
          days:31
     },
     {
          month: 'september',
          days:30
     },
     {
          month: 'octuber',
          days:31
     },
     {
          month: 'november',
          days:30
     },
     {
          month: 'december',
          days:31
     },
]
let m = prompt('Enter a month:');
for (let i = 0; i < months.length; i++){
     if (months[i].month == m.toLowerCase()) {
          alert(`${m} has ${months[i].days} days.`);
     }
}
// 2.question
let year = parseInt(prompt('Enter the year:', 0));
for (let i = 0; i < months.length; i++){
     if ((year % 4) == 0) {
          if (m.toLowerCase() == 'february') {
               
               alert(`${m} has 29 days.`);
               break;
          }
          else {
               if (m.toLowerCase() == months[i].month) {
                    alert(`${m} has ${months[i].days} days.`);
               }
          }
     }
     else {
          if (m.toLowerCase() == months[i].month) {
               alert(`${m} has ${months[i].days} days.`);
          }
     }
}