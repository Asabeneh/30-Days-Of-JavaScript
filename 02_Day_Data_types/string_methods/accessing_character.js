// Let us access the first character in 'JavaScript' string.

let string = 'JavaScript'
let size = 0;
let firstLetter = string[0]
console.log(firstLetter) // J
let secondLetter = string[1] // a
let thirdLetter = string[2]
let lastLetter = string[9]
console.log(lastLetter) // t
let lastIndex = string.length - 1
console.log(lastIndex) // 9
console.log(string[lastIndex]) // t

//Accessing String Value through loops
console.log("Iterating through for loop");
for(let i=0;i<string.length;i++){
    console.log(string[i]);
}

console.log("Iterating through while loop");
while (size<string.length) {
    console.log(string[size]);
    size++;
}

console.log("Iterating through for-each");
[...string].forEach(j => console.log(j));

console.log("Iterating through for-of");
for(let m of string){
    console.log(m);
}