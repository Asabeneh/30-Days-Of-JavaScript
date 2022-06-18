console.log(countries)
alert('Open the console and check if the countries has been loaded')
//1
for (let i = 0; i < 10; i++) {
    let j = 0
    while (j < 10) {
        console.log('hello')
    }
}
//2
for (let i = 10; i > 0; i--) {
    let j = 10
    while (j > 0) {
        console.log('hello')
    }
}
//3 and 4
let n = prompt('n: ')
for (let i = 1; i < n; i++) {
    for (let j = 1; j < i; j++) {
        console.log('#')
    }
    console.log('\n')
}
//5
for (let i = 0; i < 10; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}
//6
console.log('i  i^2  i^3')
for (let i = 0; i < 10; i++) {
    console.log(`${i}  ${i * i}  ${i * i * i}`)
}
//7
for (let i = 0; i < 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}
//8
for (let i = 0; i < 100; i++) {
    if (i % 2 != 0) {
        console.log(i)
    }
}
//9
let prime = [0, 1, 2, 3]
for (let i = 1; i < 50; i++) {
    prime.push((6 * i) - 1)
    prime.push((6 * i) + 1)
}
console.log(prime)
let num = 0
for (let i = 0; i < 101; i++) {
    num += i
}
console.log(num);
let even = 0
let odd = 0
for (let i = 0; i < 101; i++) {
    if (i % 2 == 0) {
        even += i
    } else {
        odd += i
    }
}
console.log(even);
console.log(odd);
let numArr = []
for (let i = 0; i < 5; i++) {
    numArr.push(Math.floor(Math.random()))
}
numArr.join('')