console.log(countries)
// alert('Open the console and check if the countries has been loaded')

const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
let age = 250;
let isMarried = true
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`
// Exercises Level 1

//     1- Change skills array to JSON using JSON.stringify()
var json = JSON.stringify(skills)
console.log(json)

//     2- Stringify the age variable
json = JSON.stringify(age)
console.log(json)

//     3- Stringify the isMarried variable
json = JSON.stringify(isMarried)
console.log(json)

//     4- Stringify the student object
json = JSON.stringify(student)
console.log(json)


// Exercises Level 2

//     1- Stringify the students object with only firstName, lastName and skills properties
json = JSON.stringify(student, ['firstName', 'lastName'])
console.log(json)

// Exercises Level 3

//     1- Parse the txt JSON to object.
var parse = JSON.parse(txt);
console.log(parse)

//     2- Find the user who has many skills from the variable stored in txt.
var parseEntries = Object.entries(parse);
var user = {name: "", count: 0};
var nbmax = 0;
parseEntries.forEach(function(value){
    if(value[1].skills.length>nbmax)
    {
        nbmax = value[1].skills.length
        user.name = value[0]
        user.count=nbmax
    }
})
console.log(user)