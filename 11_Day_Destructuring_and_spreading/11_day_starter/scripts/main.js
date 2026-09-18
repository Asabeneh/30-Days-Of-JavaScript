// console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

// Exercise 1
let [pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(constants);

// Exercise 2
let [fin, est, sw, den, nor] = countries;
console.log(countries);

// Exercise 3
let {width, height, area, perimeter} = rectangle;
console.log(rectangle);


        //Level 2
// Exercise 1
for (const user of users) {
    const { name, scores, skills, age } = user;
    const keys = Object.keys(user);
    console.log(`Keys for ${name}:`, keys);
  }

// Exercise 2
const usersWithLessThanTwoSkills =  users.filter(user => skills.lenght < 2);

console.log(usersWithLessThanTwoSkills);



