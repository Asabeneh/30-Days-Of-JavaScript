console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercises: Level 1

const constants = [2.72, 3.14, 9.81, 37, 100]
const countries2 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
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


// 1) Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
var [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// 2) Destructure and assign the elements of countries array to fin, est, sw, den, nor
var [fin, est, sw, den, nor] = countries2;
console.log(fin, est, sw, den, nor);

// 3) Destructure the rectangle object by its properties or keys.
var {width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);


// Exercises: Level 2

//     1) Iterate through the users array and get all the keys of the object using destructuring
var temp = [];
for(var i = 0; i < users.length; i++)
{
    var {name,scores,skills,age} = users[i];
    if(skills.length<2)
    {
        temp.push(users[i]);
    }
    console.log(name,scores,skills,age);
}


//     2) Find the persons who have less than two skills
var tab = users.filter(function(value){
    return value.skills.length<2;
});
console.log(tab);

console.log(temp);

// Exercises: Level 3

//     1) Destructure the countries object print name, capital, population and languages of all countries
for(var i = 0; i < countries.length; i++)
{
    var {name, capital, population, languages} = countries[i];
    console.log(name, capital, population, languages);
}


//     2) A junior developer structure student name, skills and score in array of arrays which may not easy to read. 
// Destructure the following array name to name, 
// skills array to skills, 
// scores array to scores, 
// JavaScript score to jsScore 
// and React score to reactScore variable in one line.

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

var [name, skills, jsScore, reactScore] = [student[0], student[1], student[2][2], student[2][3]]; 
// oui c'est intéressant mais la bonne façon de faire c'est:
var [name, skills, scores, jsScores, reactScore] = [student[0], student[1], student[2], scores[2], scores[3]]; 

console.log(name, skills, jsScore, reactScore)

// David (4) ["HTM", "CSS", "JS", "React"] 90 95


// 3- Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
  ];

function convertArrayToObject(tab){
    var retour = [];
    for(var i = 0; i < tab.length; i++)
    {
        var [name, skills, scores] = tab[i];
        retour.push({ name: name, skills: skills, scores: scores });
    }
    return retour;
}

console.log(convertArrayToObject(students));


// 4 - Copy the student object to newStudent without mutating the original object. In the new object add the following ?

// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

const student2 = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
  }

var newStudent = {...student2};
var {name, age, skills} = student2;

skills.frontEnd.push({ ...skills.frontEnd[0], skill: "Bootstrap", level: 8 });
console.log(skills.frontEnd);

skills.backEnd.push({ ...skills.backEnd[0], skill: "Express", level: 9 });
console.log(skills.backEnd);

skills.dataBase.push({ ...skills.dataBase[0], skill: "SQL", level: 8 });
console.log(skills.dataBase);

skills.dataScience.push("SQL");
console.log(skills.dataScience);

