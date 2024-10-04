// Task 1
let firstName = 'Arina'
let lastName = 'Ivleva'
let country = 'Russia'
let city = 'Omsk'
let age = 16
let isMarried = false

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)

// Task 2
console.log(typeof 10 == 10)

//Task 3
console.log(parseInt('9.8') == 10)

// Task 4
let num1 = 23
let num2 = 10
let st1 = 'Hello'
let st2 = 'Hello'

console.log(num1 == num2 + 13)
console.log(num1 == num2 * 2 + 3)
console.log(st1 == st2)
console.log(st2 != num2)

console.log(num1 != num2 + 13)
console.log(num1 != num2 * 2 + 3)
console.log(st1 != st2)
console.log(st2 == num2)

// Task 5
let res1 = 4 > 3
let res2 = 4 >= 3
let res3 = 4 < 3
let res4 = 4 <= 3
let res5 = 4 == 3
let res6 = 4 === 4
let res7 = 4 != 4
let res8 = 4 !== 4
let res9 = 4 != '4'
let res10 = 4 == '4'
let res11 = 4 === '4'

let lenPython = 'python'.length
let lenJargon = 'jargon'.length

let compar = lenPython != lenJargon

console.log(res1)
console.log(res2)
console.log(res3)
console.log(res4)
console.log(res5)
console.log(res6)
console.log(res7)
console.log(res8)
console.log(res9)
console.log(res10)
console.log(res11)
console.log(compar)

// Task 6
let a1 = 4 > 3 && 10 < 12
let a2 = 4 > 3 && 10 > 12
let a3 = 4 > 3 || 10 < 12
let a4 = 4 > 3 || 10 > 12
let a5 = !(4 > 3)
let a6 = !(4 < 3)
let a7 = !false
let a8 = !(4 > 3 && 10 < 12)
let a9 = !(4 > 3 && 10 > 12)
let a10 = !(4 === '4')
let a11 = !'python'.includes('on') && !'dragon'.includes('on')

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)
console.log(a5)
console.log(a6)
console.log(a7)
console.log(a8)
console.log(a9)
console.log(a10)
console.log(a11)

// Task 7

let date = new Date()

console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date)
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getTime() / 1000)
