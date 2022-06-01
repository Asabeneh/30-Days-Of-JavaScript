let firstName = 'kevin'
let lastName = 'h'
let country = 'USA'
let city = 'new york'
let age = 24
let isMarried = false
let year = 2022

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

console.log('10' === 10)
console.log(parseInt(9.8) === 10)

console.log(10>2)
console.log(true)
console.log('hello' === 'hello')
console.log(age === null)
console.log(age === NaN)
console.log(0 === 10)

console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log('python'.length != 'jargon'.length)

console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
console.log('dragon'.match('on') && 'python'.match('on'))
const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

//exercise 2
let trianglebase = prompt('triangle base')
let triangleheight = prompt('triangle height')
let triangle =0.5 *trianglebase * triangleheight
console.log(triangle)
let a = prompt('side a')
let b = prompt('side b')
let c = prompt('side c')
let perimeter = a+b+c
console.log(perimeter)
let width = prompt('rectangle width')
let length = prompt('rectangle length')
let rectangle = 2*(length * width)
console.log(rectangle)
let pi = Math.PI
let r = prompt('radius of circle')
let areaOfCircle = pi * r * r
console.log(areaOfCircle)
let m = prompt('mx')
let B = prompt('b')
console.log('y-intercept = ' + b + ' x-intercept = ' + (-(b)/m))
let ysub2 = prompt('ysub2')
let ysub1 = prompt('ysub1')
let xsub2 = prompt('xsub2')
let xsub1 = prompt('xsub1')
let slope = (ysub2-ysub1)/(xsub2-xsub1)
console.log(slope)
console.log(m===slope)
//skip Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let hours = prompt('hours')
let rph = prompt('rate per hour')
let weekly = hours * rph
console.log(weekly)
let Name = 'Asabeneh'
Name.length < 7
    ? console.log('your name is long!')
    : console.log('your name is short!')
let first = prompt('first name')
let last = prompt('last name')
first.length > last.length
    ?console.log(`your first name ${first} is longer than your family name, ${last}`)
    :console.log(`your first name ${first} is shorter than your family name, ${last}`)
let myAge = 250
let yourAge = 25
myAge > yourAge
    ?console.log('I am ' + (myAge-yourAge) +' years older than you')
    :console.log('your ' + (yourAge-myAge) +' years older than me')
let userAge = prompt('age ')
userAge > 18
    ?console.log(`You are ${userAge}. You are old enough to drive`)
    :console.log(`You are ${userAge}. You will be allowed to drive after ${18-userAge} years.`)
let userYear = prompt('year ')
userYear <= 100
    ?console.log(`you lived ${userYear*365*24*60*60} seconds.`)
    :console.log('the year is too large')
let day = String(now.getDay).padStart(2, '0')
let month = String(now.getMonth).padStart(2, '0')
let hour =String(now.getHours).padStart(2, '0')
let minutes = String(now.getMinutes).padStart(2, '0')
console.log(now.getFullYear+ '--'+month+ '--'+day + ' ' +hour +minutes)
console.log(day +month+'--'+now.getFullYear+ ' ' +hour+minutes)
console.log(day +month+'/'+now.getFullYear+ ' ' +hour+minutes)

console.log(now.getFullYear+ '--'+month+ '--'+day + ' ' +hour +minutes)
