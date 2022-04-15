// this is your main.js script

//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firtsName = 'Jose'
typeof firtsName
'string'
let age = 32
'number'
typeof age 
'boolean'

//2.Check if type of '10' is equal to 10
  const type = '10'=== 10
//3.Check if parseInt('9.8') is equal to 10
  const parse = parseInt('9.8') 
  parse===10
//4.Boolean value is either true or false.

    //i.Write three JavaScript statement which provide truthy value.
    let white = true
      white ? console.log('is white'): console.log('is not white')

    let monday = true 
    monday? console.log('week start'): console.log('weekend')

    let road = true
    road ? console.log('road is open'): console.log('road is close')

    //ii.Write three JavaScript statement which provide falsy value.
    
    let door= false
    door ? console.log(`door is close`):console.log(`door is open`)

    let noche = false
    noche ? console.log('es de dia'): console.log('es noche')

//5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log() 


//i.    4 > 3  true
//ii.   4 >= 3 true
//iii   4 < 3  true
//v.    4 <= 3 false
//iv.   4 == 4 true
//vi.   4 === 4 true
//vii.  4 != 4 false
//viii. 4 !== 4 false 
//ix.   4 != '4' true
//x.    4 == '4' true
//xi.   4 === '4' false

//xii. Find the length of python and jargon and make a falsy comparison statement.
console.log('wordJargon'.length!=='wordPython'.length)


//6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

//i.    4 > 3 && 10 < 12 
//ii.   4 > 3 && 10 > 12
//iii   4 > 3 || 10 < 12 
//v.    4 > 3 || 10 > 12 
//iv.   !(4 > 3) 
//vi.   !(4 < 3)
//vii.  !(false)
//viii. !(4 > 3 && 10 < 12)
//ix.   !(4 > 3 && 10 > 12)
//x.    !(4 === '4')
//xi.   There is no 'on' in both dragon and python
 
//7.Use the Date object to do the following activities

//i.What is the year today?
const now = new Date()
const year = now.getFullYear()

//ii.What is the month today as a number?
const month = now.getMonth()+1

//iii.What is the date today?
const date = now.getDate()

//iv. What is the day today as a number?
const day = now.getDay()

//v. What is the hours now?
const hours = now.getHours()

//vi. What is the minutes now?
console.log(now.getMinutes())

//vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
const allseconds = Date.now()


//Exercises: Level 2

//1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = parseInt(prompt('base', 'enter base')) 
let height = parseInt(prompt('Height','Enter height'))
let areaTriangle = base * height * 0.5
console.log(areaTriangle)

//2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let sideA = parseInt(prompt('Side a', 'Enter side a'))
let sideB = parseInt(prompt('Side b', 'Enter side b'))
let sideC = parseInt(prompt('Side c', 'Enter side c'))
let perimeter = sideA + sideB + sideC
console.log(perimeter)

//3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = parseInt(prompt('length', 'Enter length')) 
let width = parseInt(prompt('Height','Enter width'))
let areaRectangle = length * width 
console.log(areaTriangle)
let perimeterRectangle = 2 * (length + width)
console.log(perimeterRectangle)

//4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14. 
const PI = 3.14
let radius = parseInt(prompt('Radius', 'Enter radius'))
let area = PI * (radius**2)
console.log(area)
let circunference = 2 * PI * radius
console.log(circunference)

//5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
let y1 = 2;
let y2 = -2;
let x1 = 2; 
let x2 = -2;
console.log(`Slope is${(y2 - y1) / (x1 - x2)}`); //-1


//6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
let slope = console.log(`Slope is${(2, 2) / (6, 10)}`); // 0.2

//7.Compare the slope of above two questions.


//8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
let xs1 = 2 
let xs2 = 6 
let y = xs1 + xs2 + 9
console.log(y)

//9.Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

/*Enter hours: 40
Enter rate per hour: 28
Your weekly earning is 1120*/
let payHours = parseInt(prompt('Hours', 'Enter hours worked'))
let ratePerHour = parseInt(prompt('Rate per hour', 'Enter rate per hour $'))
let earnings = payHours * ratePerHour
console.log(earnings)


//10.If the length of your name is greater than 7 say, your name is long else say your name is short.
let names = 'Jose'
names.length > 7 ? console.log('your name is long'): console.log('name is short') 

function namesLength(name){
  name= prompt('enter name'), name.length > 7 ? console.log('your name is long'): console.log('name is short');}

//11.Compare your first name length and your family name length and you should get this output.
let firstName = 'Jose'
let lastName = 'linardo'
let compareNames = firstName.length > lastName.length ? console.log('Your first name ' + firstName + 'is longer than your family name ' + lastName): console.log('your first name ' + firstName + 'is smaller than your family name ' + lastName)

//12. Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = parseInt(prompt('my age'))
let yourAge = parseInt(prompt('your age'))
let compareAges =  myAge > yourAge ? console.log(`I am ${(myAge-yourAge)}years older than you.`): console.log(`I am ${(yourAge-myAge)} years young than you`)

//13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

/*Enter birth year: 1995
You are 25. You are old enough to drive

Enter birth year: 2005
You are 15. You will be allowed to drive after 3 years.*/
let birthYear = prompt('Enter your Birth year')
let minAge = 18
if(birthYear.length===4){
let age_ = now.getFullYear()-parseInt(birthYear)
const ageToDrive =  age_< 18? console.log(`You are. ${age_} You will be allowed to drive after ${(minAge-age_)} years`): console.log(`You are ${age_} You are old enough to drive`)}
else{ alert('Please enter your complete birth year.It should not be less than 4 numbers' )
}  

//14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

/*Enter number of years you live: 100
You lived 3153600000 seconds.*/
let numberOfSeconds = parseInt(prompt('Enter years'))*(60*60 *24*365)
console.log(numberOfSeconds)

//15.Create a human readable time format using the Date time object

// i.  YYYY-MM-DD HH:mm
const now_= new Date()
let day_ = `${(now_.getDate())}`.padStart(2,'0');
 let month_ = `${(now_.getMonth()+1)}`.padStart(2,'0');
 let year_ = now_.getFullYear();
 const date_ = now_.getDate();
 let minutes = now_.getMinutes()
 const hours_ = now_.getHours()
console.log(`${year_}/${month_}/${day_}/${hours_}:${minutes}`);

//ii.  YYYY-MM-DD HH:mm
console.log(`${year_}/${month_}/${day_}/${hours_}:${minutes}`);

//iii. DD/MM/YYYY HH:mm*/
console.log(`${day_}/${month_}/${year_}/${hours_}:${minutes}`);

  //Exercises: Level 3

  /*1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
   padStart(2,'0')
  i.YYY-MM-DD HH:mm eg. 20120-01-02 07:05

var numero = parseInt(prompt("introduzca un número"));
    while (numero >= 10) {
        numero = numero.toString().split('').map(x => parseInt(x) )
            .reduce( (x, y) => x + y);
    }
    alert(numero);*/