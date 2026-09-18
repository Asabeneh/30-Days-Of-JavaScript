// 1.question
let personInfo = {
     firstName: 'satya',
     lastName: 'surendra',
     country: 'India',
     city: 'Drakshaxxxx',
     age: 20,
     isMarried: false,
     year:2002
};
Object.keys(personInfo).forEach(key => {
     console.log(typeof personInfo[key]);
})
// 2.question
console.log(('10' == 10));
// 3.question
console.log((parseInt('9.8') == 10));
// 4.1.question
console.log(Boolean(1));
console.log(Boolean(true));
console.log(Boolean("satya"));
// 4.2.question
console.log(Boolean(0));
console.log(Boolean(false));
console.log(Boolean(""));
// 5.question
true      //4>3
true      //4>=3
false     //4<3
false     //4<=3
true      //4==4
true     //4===4
false     //4!=4
false     //4!==4
false     //4!='4
true      //4=='4
false     //4==='4
console.log(('python'.length === 'jargon'.length));
// 6.question this is also same as the 5.question so iam skipping it
// 7.question
let now = new Date();
let year = now.getFullYear(),
     month = now.getMonth(),
     date = now.getDate(),
     day = now.getDay(),
     hrs = now.getHours(),
     min = now.getMinutes(),
     time = now.getTime();


