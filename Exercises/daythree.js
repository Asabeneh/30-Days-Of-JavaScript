/* ## 💻 Day 3: Exercises

### Exercises: Level 1

1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.
   1. Write three JavaScript statement which provide truthy value.
   2. Write three JavaScript statement which provide falsy value.

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Find the length of python and jargon and make a falsy comparison statement.

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. There is no 'on' in both dragon and python

7. Use the Date object to do the following activities
   1. What is the year today?
   2. What is the month today as a number?
   3. What is the date today?
   4. What is the day today as a number?
   5. What is the hours now?
   6. What is the minutes now?
   7. Find out the numbers of seconds elapsed from January 1, 1970 to now.

### Exercises: Level 2

1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 50
   ```

1. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

1. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
1. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
1. Calculate the slope, x-intercept and y-intercept of y = 2x -2
1. Slope is (m = y2-y1/x2-x1). Find the slope between point (2, 2) and point(6,10)
1. Compare the slope of above two questions.
1. Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
1. Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

1. If the length of your name is greater than 7 say, your name is long else say your name is short.
1. Compare your first name length and your family name length and you should get this output.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```

1. Declare two variables _myAge_ and _yourAge_ and assign them initial values and myAge and yourAge.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

1. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

1. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

   ```sh
   Enter number of yours you live: 100
   You lived 3153600000 seconds.
   ```

1. Create a human readable time format using the Date time object
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm

### Exercises: Level 3

1. Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
   1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
    */



   

   

   // 1 
const firstName = 'Eray'
const lastName = undefined
const isMarried = true
const city = 'Istanbul'
const age = 20

// 2

/* 4 > 3 true
4 >= 3 true
4 < 3 false
4 <= 3 false
4 == 4 true 
4 === 4 true
4 != 4 false
4 !== 4 false
4 != '4' true 
4 == '4' false
4 === '4' false
Find the length of python and jargon and make a falsy comparison statement. 
 */

/* 
 4 > 3 && 10 < 12 true 
4 > 3 && 10 > 12 false
4 > 3 || 10 < 12 true
4 > 3 || 10 > 12 true
!(4 > 3) false
!(4 < 3) true
!(false) true 
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python */


// 7

//i 

const now = new Date()
console.log(now.getFullYear())
)

//ii 
console.log(now.getMonth() + 1)

//iii 

console.log(now)


//iv

console.log(now.getDay())

//v

console.log(now.getHours())

//vi

console.log(now.getMinutes())

//vii

console.log(now.getTime())


// Exercise Level 2

const triangleBase = 20
const triangleHeight = 10

const triangleArea = function(a,b){
   let area = 0
   return area = a*b*(0.5)
}

triangleArea(triangleBase,triangleHeight)

// 

const triPerimeter = function (a,b,c){
   return a + b + c
}

triPerimeter(1,2,3)

//

const returner = function(a){
   let math = Math.sqrt(a)
   return math
}


//

const circPerim = function(r){
   let math = (3.14)*2*r
   return math
}

//

const myFunct = function(x){
   let y = (x*x) + (6*x) + 9
   return y 
}

// 


const calculater = function(x,y){
   const all = (x * y) 
   const all2 = (x * y * 4)
   return all && all2 
'Weekly salary:  ${all} Monthly salary: ${all2}'
}


// 

const nameMessage = (name) => {
   let myName = name 
   if (myName.length > 7) {
      console.log('your age is long')
   } else {
      console.log('Your age is short')
   }
}


//

const compareNames = (firstName,lastName) => {
   let ad = firstName
   let soyad = lastName
   if (ad.length > soyad.length){
      console.log('your firstname is longer than your lastname')
   } else if (ad.length == soyad.length){
      console.log('your first name and your lastname is equal')
   } else {
      console.log('your lastname is longer than your firstname')
   }
}


// That was hard tho

const compareAges = (x,y) => { 
   let diff = (x - y) 
   let txt = `X is ${diff} years older`
   let txt2= `Y is ${(-1 * diff)} years older`
   let txt3= `ages are equal`
   if (diff > 0){
           return txt
   } else if (diff == 0){
            return txt3
   } else { 
               return txt2
   }
}



// 

const driveYear = (year) => {
   const now = new Date()
   const birth = year
   const age = (now.getFullYear()) - year
   if (age >= 18){
       return `you are allowed`
   } else { return `you cant drive. you can drive after ${(18 - age)} years.` }
}

driveYear(2005)


// How much second I live

const getMin = (year) => {
   const now = new Date()
   const birth = year
   const age = (now.getFullYear()) - year
   return (age * (365 * 24 * 60 * 60)) + ((age/4) * (24 * 60 * 60))
   
}


//


   