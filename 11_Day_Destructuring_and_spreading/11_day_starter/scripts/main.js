console.log(countries)
//alert('Open the console and check if the countries has been loaded')
const constants = [2.72, 3.14, 9.81, 37, 100]

const countries_ = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

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
  
  //1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants
console.log(gravity)

//2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin, est, sw, den, nor] = countries_

//3. Destructure the rectangle object by its properties or keys.
  let {width, height, area, perimeter} = rectangle;
  
  console.log(width);  // 20
  console.log(area);   // 200

  //Exercises: Level 2
  
  //1. Iterate through the users array and get all the keys of the object using destructuring
  for (const {name, scores, skills, age} of users) {
    console.log(Object.keys({name, scores, skills, age}));
  }

 // get the keys without destructuring
for (const element of users) {
    console.log(Object.keys(element));
  }

  //2. Find the persons who have less than two skills
  for (const {name, scores, skills, age} of users) {
    if (skills.length < 2) {
      console.log(name);
    }
  }

  // Exercises: Level 3
  //1. Destructure the countries object print name, capital, population and languages of all countries
  for (const {name, capital, languages, population, ...rest} of countries) {
    console.log(name, capital, population, languages);
  }

  //2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
  const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
  /*let [name, skills, [ , ,jsScore, reactScore]] = student;
console.log(name, skills, jsScore, reactScore);*/
    
//3. Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTML', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ]
  
  const convertArrayToObject = (arr) => {
    for (const [name, skills, scores] of arr) {
      console.log({name: name, skills: skills, scores: scores});
    }
  }
  console.log(convertArrayToObject(students));

  //4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
//Add Bootstrap with level 8 to the front end skill sets
//Add Express with level 9 to the back end skill sets
//Add SQL with level 8 to the data base skill sets
//Add SQL without level to the data science skill sets

const newStudent = {...student}
const {name, age, skills} = newStudent;
let {frontEnd, backEnd, dataBase, dataScience} = skills;
frontEnd.push(skills, {skill: 'Bootstrap', level: 8});
backEnd.push({skill: 'Express', level: 9});
dataBase.push({skill: 'SQL', level: 8});
dataScience.push('SQL');