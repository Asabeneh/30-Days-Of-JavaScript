// 1.question
let emt = [];
// 2.question
let five = [1, 2, 3, 4, 5];
// 3.question
console.log(five.length);
// 4.question
let f = 0, l = five.length - 1, mid = (f + l) / 2;
console.log(five[f], five[l], five[mid]);
// 5.question
let mixedDataTypes = [
     1,
     'satya',
     false,
     20,
     null
];
// 6.question
let itCompanies = [
     'Facebook',
     'Google',
     'Microsoft',
     'Apple',
     'IBM',
     'Oracle',
     'Amazon'
];
// 7.question
console.log(itCompanies);
// 8.question
console.log(itCompanies.length);
// 9.question
l = itCompanies.length - 1;
console.log(itCompanies[f], itCompanies[l], itCompanies[mid]);
// 10.question
itCompanies.forEach((company) => console.log(company));
// 11.question
itCompanies.forEach((company) => console.log(company.toUpperCase()));
// 12.question
console.log(itCompanies.toString());
// 13.question
(itCompanies.includes('Facebook')) ? console.log(itCompanies[itCompanies.indexOf('Facebook')]) : console.log('Not found');;
// 14.question
// itCompanies.map((c) => {
//      let count = 0;
//      let i = c.split(',');
//      i.map((e) => {
//           console.log(e);
//           if (e.split(',') == 'o') { count++; }
//      })
//      if (count > 1) {
//           // console.log(c);
//      }
//      // console.log(c);
// });
// 15.question
itCompanies.sort();
// 16.question
itCompanies.reverse();
// 17.question
itCompanies.slice(0, 2);
// 18.question
itCompanies.slice(l - 4, l - 1);
// 19.question
itCompanies.slice(mid, mid + 1);
// 20.question
itCompanies.shift();
// 21.question
itCompanies.splice(mid, 1, 0);
// 22.question
itCompanies.pop();
// 23.question
itCompanies.slice(0);
