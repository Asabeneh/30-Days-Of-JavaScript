const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// 1.question
let temp = [];
let keys = Object.keys(users);
for (const key in users) {
  temp.push(users[key].skills.length);
}
let max = Math.max(...temp);
let index = temp.indexOf(max)
console.log(keys[index]);
// 2.question
let logcount = 0;
let pointcount = 0;
for (const key in users) {
  if(users[key].isLoggedIn === true){
    logcount++;
  }
  if (users[key].points >= 50) {
    pointcount++;
  }
}
console.log(`${logcount} and ${pointcount}`);
// 3.question
let MERN = ['MangoDB', 'Express', 'React', 'Node'];
let i = 0;
temp = [];
for (const key in users) {
  i++;
  let skills = users[key].skills;
  skills.forEach(element => {
    if (element === 'MongoDB' && element === 'Express' && element === 'React' && element === 'Node') {
      temp.push(i);
      console.log('hi');
    }
  });
}
console.log(temp);
// 4.question
users.satya = {
  email: 'satya@satya.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 20,
  isLoggedIn: true,
  points:10
}
console.log(users);
// 5.question
keys = Object.keys(users);
// 6.question
let values = Object.values(users);
