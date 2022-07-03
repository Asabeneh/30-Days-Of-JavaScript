console.log(countries)
//alert('Open the console and check if the countries has been loaded')


//Exercises Level 1

//1. Change skills array to JSON using JSON.stringify()
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

let txtSkills = JSON.stringify(skills)
console.log(txtSkills) //["HTML","CSS","JS","React","Node","Python"]

//2. Stringify the age variable
let ageTxt = JSON.stringify(age)
console.log(ageTxt)

//3. Stringify the isMarried variable
isMarriedTxt = JSON.stringify(isMarried)
console.log(isMarriedTxt)

//4. Stringify the student object
let studentTxt = JSON.stringify(student)
console.log(student)

//Exercises Level 2

//1. Stringify the students object with only firstName, lastName and skills properties
let studentObject = JSON.stringify(student, ["firstName", "lastName", "skills"], 2)
console.log(studentObject,)
// Exercises Level 3

//1. parse the txt JSON to object
txtObject = JSON.parse(txt)
console.log(txtObject)

//2. Find the user who has many skills from the variable stored in txt.
const txtNames = Object.keys(txtObject);
console.log(txtNames)

const skillsNum = [];
for (let i = 0; i < txtNames.length; i++) {
  skillsNum.push(txtObject[`${txtNames[i]}`].skills.length);
}

let max = Math.max(...skillsNum);
console.log(skillsNum)
for (const element of skillsNum) {
  if (element === max) {
    let name = txtNames[skillsNum.indexOf(element)]
    console.log(`${name} ${max}`)
  }
}  // Asab


