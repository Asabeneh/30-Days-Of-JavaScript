# Day 4 - Conditional
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercise-level-1)
- ### [Exercise:Level 2](#exercise-level-2)
- ### [Exercise:Level 3](#exercise-level-3) <hr>

 #### [Home](../README.md) | [<< Day 3](./03_day_operators.md) | [Day 5 >>](./05_day_arrays.md)


## Exercise Solutions

### Exercise Level 1

1.  Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

```
Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
```

```js
// app.js

let age = Number(prompt("lüefen yaşınızı giriniz"))
if(age >=18){
    console.log(`Araba kullanabilecek yaştasınız`)
}
else(
    console.log(`araba kullanabilmek için ${18-age} yıl beklemeniz gerekmektedir`)
)
```
2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

```
Enter your age: 30
You are 5 years older than me.
```

```js
// app.js

let myAge =18
let yourAge=18

if(myAge > yourAge ){
    console.log(`ben senden ${myAge - yourAge} yıl büyüğüm`)
}

else if(myAge == yourAge){
    console.log('aynı yaştayız')
}
else(
    console.log(`sen benden ${yourAge - myAge} yıl büyüksün`)
)

```
3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

```
- using if else
- ternary operator

  let a = 4
  let b = 3
  ```
```js
// app.js

let result =a > b
  ? console.log("a büyüktür b")
  : console.log("b büyüktür a")
```

4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
```
Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number.
```

```js
// app.js

let num = Number(prompt("sayı giriniz"))

if(num % 2 ==0){
    console.log(`${num} sayısı çifttir`)
}
else{
    console.log(`${num} sayısı tektir`)
}
```

### Exercise Level 2

 1. Write a code which can give grades to students according to theirs scores:

 ```
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F
```

```js
// app.js

let scores = Number(prompt("notunuzu giriniiz"))

if(80 <= scores && scores <=100 ){
    console.log("notunuz ")
}
else if( 70 <= scores && scores <=79 ){
     console.log("notunuz B")
}
else if( 60 <= scores && scores <=69 ){
    console.log("notunuz C")
}
else if( 50 <= scores && scores <=59 ){
    console.log("notunuz D")
}
else if( 0 <= scores && scores <=49 ){
    console.log("notunuz E")
}
```


2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

```
- September, October or November, the season is Autumn.
- December, January or February, the season is Winter.
- March, April or May, the season is Spring
- June, July or August, the season is Summer
```

```js
// app.js

const mount = String(prompt('hangi aydayız')).toLowerCase();

if(mount=='september' || mount=='october'|| mount=='november'){
  console.log('The seson is Autumn')
}

else if(mount=='december' || mount=='january' || mount=='february'){
  console.log('The season is Winter')
}
else if(mount=='march'||mount=='may' ||mount=='april'){
  console.log('The season is Spring')
}
else if(mount=='june'||mount=='juli'||mount=='august'){
  console.log('The seasom is Summer')
}
else{
  console.log(`${mount} is not a mount`)
}
```

3. Check if a day is weekend day or a working day. Your script will take day as an input.

```
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
```

```js
// app.js

let day = prompt('What day is today').toLowerCase()

switch (day) {
  case 'monday':
  case 'tuesday':
  case 'wednesday':
  case 'thursday':
  case 'friday':
    console.log(`${day} is a workind day`)
break;
  case 'sunday':
  case 'saturday':
    console.log(`${day} is  weekend`)
    break;
    default: console.log(`${day} is't a day`)
}
```
### Exercise Level 3

1. Write a program which tells the number of days in a month.

```
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
```
```js
// app.js

let month = prompt('Please enter a month')

switch (month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
  alert(`month has 31 day`)
}
switch(month){
  case 'april':
    case 'june':
    case 'september':
    case 'november':
      
    alert(`month has 30 day`)
}

switch(month){
  case 'february':

  alert(`month has 28 day`)

}
```

 #### [Home](../README.md) | [<< Day 3](./03_day_operators.md) | [Day 5 >>](./05_day_arrays.md)


