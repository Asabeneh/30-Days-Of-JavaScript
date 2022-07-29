// 1.question
function solveLinEquation(a, b, c) {
     return -a / b;
}
// 2.question
// function solveQuadratic(a,b,c) {
//      return Math.sqrt(-b + 4 * a * c) / 2*a;
// }
// // console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// 3.question
function printArray(arr) {
     for (let i = 0; i < arr.length; i++){
          console.log(arr[i]);
     }
}
printArray([1, 2, 3, 4, 5]);
// 4.question
function showDateTime() {
     let now = new Date();
     let day = now.getDate(),
          mon = now.getMonth(),
          year = now.getFullYear(),
          hrs = now.getHours(),
          min = now.getMinutes();
     console.log(`${day}/${mon}/${year} ${hrs}:${min}`);
}
// 5.question
function swap(a, b) {
     let t;
     t = a;
     a = b;
     b = t;
     console.log(a,b); 
}
swap(1, 2)
// 6.question
function reverseArray(arr) {
     let rev = [];
     for (let i = arr.length; i >= 0; i--){
          rev.push(arr[i]);
     }
     return rev;
}
// 7.question
function capitalizeArray(arr) {
     let newArray = arr.map((e) => {
          return e[0].toUpperCase() + e.slice(1);
     })
     console.log(newArray);
}
// 8.question
let arr = [];
function addItem(item) {
     return arr.push(item);
}
console.log(arr);
// 9.question
function removeItem(index) {
     return arr.splice(index,1)
}
// 10.question
function sumOfNumbers(min, max) {
     let sum = 0;
     for (let i = min; i <= max; i++){
          sum += i;
     }
     return sum;
}
// 11.question
function sumOfOdds(min, max) {
     let sum = 0;
     for (let i = min; i <= max; i++){
          if (i % 2 !== 0) {
               sum += i;
          }
     }
     return sum;
}
// 12.question
function sumOfEven(min, max) {
     let sum = 0;
     for (let i = min; i <= max; i++){
          if (i % 2 === 0) {
               sum += i;
          }
     }
     return sum;
}
// 13.question
function evensAndOdds(num) {
     let evenCount = 0;
     let oddCount = 0;
     for (let i = min; i <= max; i++){
          if (i % 2 === 0) {
               evenCount++;
          } else {
               oddCount++;
          }
     }
     console.log(`The number of odds are ${evenCount} \n The number of odds are ${oddCount}`);
}
// 14.question
function sum() {
     let sum = 0
     for (let i = 0; i < arguments.length - 1; i++){
          sum += arguments[i];
     }
     console.log(sum);
}
// 15.question
function randomUserIp() {
     let ip = [];
     let i = 0;
     for (let i = 0; i < 4; i++){
          let rand = Math.floor(Math.random() * 255);
          ip.push(rand);
     }
     return `${ip[i++]}.${ip[i++]}.${ip[i++]}.${ip[i++]}`;
}
// 16.question
function randomMacAddress() {
     let hex = '0123456789abcdef';
     let mac = [];
     let i = 0;
     for (let i = 0; i < 6; i++) {
          let macAddress = '';
          for (let j = 0; j < 2; j++){
               let rand = Math.floor(Math.random() * hex.length);
               macAddress = macAddress + hex[rand];
          }
          mac.push(macAddress);
     }
     return `${mac[i++]}:${mac[i++]}:${mac[i++]}:${mac[i++]}:${mac[i++]}:${mac[i++]}`
}
console.log(randomMacAddress());
// 17.question
function randomHexaNumberGenerator() {
     let hexcode = '0123456789abcdef';
     let hex = '';
     for (let i = 0; i < 6; i++){
          let rand = Math.floor(Math.random() * hexcode.length);
          hex += hexcode[rand];
     }
     return '#' + hex;
}
console.log(randomHexaNumberGenerator());
// 18.question
function userIdGenerator() {
     let idcode = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
     let id = '';
     for (let i = 0; i < 7; i++){
          let rand = Math.floor(Math.random() * idcode.length);
          id += idcode[rand];
     }
     return  id;
}
console.log(userIdGenerator());

