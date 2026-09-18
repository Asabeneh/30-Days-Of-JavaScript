// 1.question
for (let i = 0; i < 10; i++){
     //code
}
let i = 0;
while (i < 10) {
     //code
     i++;
}
i = 0;
do {
     //cpde
     i++;
} while (i < 10)
// 2.question
for (let i = 10; i >= 0; i--){
     //code
}
 i = 10;
while (i >=0) {
     //code
     i--;
}
i = 10;
do {
     //cpde
     i--;
} while (i >= 0)
// 3.question
let n;
for (i = 0; i < n; i++){
     //code
}
// 4.question
let str = '';
for (i = 1; i < 8; i++){
     for (let j = 1; j <=i; j++){
          str+='#'
     }
     str += '\n';
}
console.log(str);
// 5.question
for (i = 0; i < 11; i++){
     console.log(`${i} x ${i} = ${i*i}`);          
}
// 6.question
for (i = 0; i < 11; i++){
     console.log(`${i}  ${Math.pow(i,2)}  ${Math.pow(i,3)}`);          
}
// 7.question
i = 0;
while (i < 101) {
     if (i % 2 == 0) {
          console.log(i);
     }
     i++;
}
// 8.question
i = 0;
while (i < 101) {
     if (i % 2 != 0) {
          console.log(i);
     }
     i++;
}
// 9.question
i = 0;
while (i < 101) {
     let count = 0;
     for (j = i; j > 0; j--){
          if (i % j == 0) {
               count++;
          }
     }
     if (count == 2) {
          console.log(i);
     }
     i++;
}
// 10.question
i = 0;
let sum = 0;
while (i < 101) {
     sum += i;
     i++;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);
// 11.question
i = 0;
let evenSum = 0;
while (i < 101) {
     if (i % 2 == 0) {
          evenSum += i;
     }
     i++;
}
let oddSum = sum-evenSum
console.log(`The sum of all numbers from 0 to 100 is ${evenSum} . And the sum of all odds from 0 tp 100 is ${sum - evenSum}`);
// 12.question
let sums = [oddSum, evenSum];
console.log(sums);
// 13.question
let rand = [];
for (i = 0; i < 5; i++){
     rand.push(Math.floor(Math.random() * 10));
}
console.log(rand);
// 14.question
let uniqueRand = [];
for (i = 0; i < 5; i++){
     let temp = Math.floor(Math.random() * 10);
     while (uniqueRand.includes(temp)) {
          temp = Math.floor(Math.random() * 10);
     }
     if (!uniqueRand.includes(temp)) {
          uniqueRand.push(temp)
     }
}
console.log(uniqueRand);
// 15.question
let code = '0123456789abcdefghijklnopqrstuvwxyz';
let id = '';
for (i = 0; i < 6; i++){
     temp = Math.floor(Math.random() * code.length);
     id += code[temp];
}
console.log(id);