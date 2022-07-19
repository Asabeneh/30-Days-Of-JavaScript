// 1.question
console.log(
     `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);
// 2.question
console.log(
     "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
);
// 3.question
(10 === '10') ? console.log(true) : +'10';
// 4.question
(parseFloat('9.8') === 10)?console.log(true): Math.ceil(+'9.8')
// 5.question
if ('python'.includes('on')&&'jargon'.includes('on')) {
     console.log(true);
}
// 6.question
if ('I hope this course is not full of jargon'.includes('jargon')) {
     console.log(true);
}
// 7.question
console.log(Math.floor(Math.random() * 101));
// 8.question
console.log(Math.floor(Math.random() * (101 - 50)) + 50);
// 9.question 
console.log(Math.floor(Math.random() * 225));
// 10.question

// 11.question
for (let i = 0; i < 5; i++) {
     for (let j = 0; j < 5; j++) {
          if (j == 1) {
               console.log(1);          
          }
          else if (j == 0 || j == 2) {
               console.log(i+1);
          } else {
               console.log(Math.pow(i+1,j-1));
          }
     }     
     console.log(' ');
}
console.log(
     `1 1 1 1 1 
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125` 
);
// 12.question
let sent = 'You cannot end a sentence with because because because is a conjunction';
let i = sent.indexOf('because');
let j = sent.lastIndexOf('because');
let len = 'because'.length;
console.log(sent.slice(i, j+len));


