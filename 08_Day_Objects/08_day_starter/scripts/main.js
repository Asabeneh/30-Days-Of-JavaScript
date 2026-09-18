console.log(countries)

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
  
//alert('Open the console and check if the countries has been loaded')

// Day 8
// Exercise 1
const dog = {};

// Exercise 2
console.log(dog);

// Exercise 3
dog.name = 'Bingo';
dog.legs = 4;
dog.color = 'Brown';
dog.age = 10;
dog.bark = function () {
    return 'woof woof'
}

// Exercise 4
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());

// Exercise 5
dog.breed = 'Bulldog';
dog.getDogInfo = function () {
    return `${this.name} is a ${this.color} ${this.breed}, it has ${this.legs} legs`;
}

console.log(dog.getDogInfo);

                                         // Exercise Level 2
// Exercise 1
let maxSkills = 0;
let skillFullPerson = '';

for (const user in users) {
    if (users[user].skills.length > maxSkills) {
        maxSkills = users[user].skills.length;
        skillFullPerson = user;
    }
}

console.log(skillFullPerson)

// Exercise 2
let loggedInCount = 0;
let highPointsCount = 0;

for (const user in users) {
    if (users[user].isLoggedIn) {
        loggedInCount++;
    }
    if (users[user].points >= 50) {
        highPointsCount++;
    }
}

console.log('Logged In Users:', loggedInCount);
console.log('Users with >= 50 Points:', highPointsCount);

// Exercise 3
let mernDevelopers = [];

for (const user in users) {
    if (users[user].skills.includes('MongoDB') && users[user].skills.includes('Express') && users[user].skills.includes('React') && users[user].skills.includes('Node')) {
        mernDevelopers.push(user);
    }
}

console.log(`MERN developers are: ${mernDevelopers}`)

// Exercise 4
const myName = 'Gideon';
users[myName] = {
    email: 'bubaambore@gmail.com.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 21,
    isLoggedIn: false,
    points: 30
}

// Exercise 5
const keys = Object.keys(users);
console.log('Keys:', keys);

// Exercise 6
const values = Object.values(users);
console.log('Values:', values)

// Exercise 7
const countries = {
    USA: {
      capital: 'Washington, D.C.',
      population: 331002651,
      languages: ['English']
    }
}
