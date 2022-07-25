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
