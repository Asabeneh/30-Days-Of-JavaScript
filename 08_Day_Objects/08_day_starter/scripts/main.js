console.log(countries)
//alert('Open the console and check if the countries has been loaded')

//1. Create an empty object called dog
const dog = new Object()

//2.Print the the dog object on the console
console.log(dog)

//3.Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = 'Tobby'
dog.legs = 4
dog.color = 'brown'
dog.age = 1
dog.bark = function(){
  return 'woof woof' 
}
console.log(dog)

//4.Get name, legs, color, age and bark value from the dog object
const entries = Object.values(dog)
console.log(entries)

//5.Set new properties the dog object: breed, getDogInfo
dog.breed = 'mix'
dog.getDogInfo = function(){
  return `${this.name} ${this.color} ${this.breed}`
}
console.log(dog.getDogInfo())
console.log(dog)

// Exercises: Level 2

//1.Find the person who has many skills in the users object.
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
console.log(users)

const usersIds = Object.keys(users)
const userSkills = [];
for(user in usersIds ){
  userSkills[user] = users[usersIds[user]].skills.length
}
console.log(users[usersIds[user]].skills.length)

const maxUsersSkills = () => {
console.log(userSkills)
const max = Math.max(...userSkills)
  for(user in usersIds){
  if(userSkills[user]== max)
  return `User with maximun Skills is ${usersIds[user]} `
  }
}; console.log(maxUsersSkills())

 //2.Count logged in users, count users having greater or equal to 50 points from the following object.
 function countLogsAndPoints () {
  const userIds = Object.keys(users);
    let countLoggedIn = 0;
    let countUserPoints = 0
   for (user in userIds) {
    if (users[userIds[user]].isLoggedIn == true) {
       countLoggedIn++;
    }
     if(users[userIds[user]].points >= 50 ){
       countUserPoints++
    }
  }
  return `Users logged are ${countLoggedIn}, Users points greater or equal to 50 are ${countUserPoints} `

 }; console.log(countLogsAndPoints())

//3. Find people who are MERN stack developer from the users object
function whoAreMern () {
  mernDev = []
  const usersIds =Object.keys(users)
  for(user in usersIds){
    usersSkills = users[usersIds[user]].skills
    if(usersSkills.includes('MongoDB' && 'Express' && 'React' && 'Node')){
      mernDev.push(usersIds[user])
    }
  }; return mernDev.join(', ')
}; console.log(whoAreMern())

//4. Set your name in the users object without modifying the original users object
let newUsers = {...users}
newUsers.Jose = {
  email: 'jose@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript'],
  age: 30,
  isLoggedIn: true,
  points: 50
}
console.log(newUsers)

//5. Get all keys or properties of users object
const entriesNewUsers = Object.entries(users)
console.log(entriesNewUsers)

//6. Get all the values of users object
const values =  Object.values(users)
console.log(values)

//7. Use the countries object to print a country name, capital, populations and languages.
for (let i = 0; i < countries.length; i++) {
  let name = countries[i]['name'];
  let capital = countries[i]['capital'];
  let population = countries[i]['population'];
  let languages = countries[i]['languages'];
  console.log(`${name}, ${capital}, ${population}, ${languages}`);
}

// Exercises: Level 3

//1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount = {
  
  firstName: 'Jane',
  lastName: 'Doe',
  incomes: {
    salary: 5000,
    onlinecourses: 15000,
    parttime: 1000
  },
  expenses: {
    groceries: 1500,
    bills: 3000
  },
 
  getTotalIncomes(){
    const incomesFrom = Object.keys(this.incomes);
    let addIncomes = 0;
    for (let i = 0; i < incomesFrom.length; i++){
        addIncomes += this.incomes[incomesFrom[i]]
    };
    return addIncomes;
  },
  
  

  getTotalExpenses () {
    const expensesFrom = Object.values(this.expenses);
    return expensesFrom.reduce((acc, curr) => acc + curr);
  }

};
console.log(personAccount.getTotalIncomes());
console.log(personAccount.getTotalExpenses());

//2.**** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const usersArr = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]


//Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
//b. Create a function called signIn which allows user to sign in to the application

//let userNameInput = prompt('Enter your first name.')

function signUp() {
  
  const usernames = [];
  for (let i = 0; i < usersArr.length; i++) {
    usernames.push(usersArr[i].username);
  }
  if (usernames.includes(userNameInput)) {
    console.log(`${userNameInput} already exist.`);
  } else {
    signIn();
  }
}

function signIn() {
  const newUser = {};
  newUser._id = generateId();
  newUser.username = userNameInput
  newUser.email = prompt('Enter your email address.');
  newUser.password = prompt('Set your password.', '6 digits of number'); 
  newUser.createdAt = generateTime();
  newUser.isLoggedIn = true;
  usersArr.push(newUser);
}

function generateId() {
  let possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const id = [];
  for (let i = 0; i < 6; i++) {
    id.push(possible.charAt(Math.floor(Math.random() * possible.length)));
  }
  return id.join('');
}

const generateTime = () => {
  const now = new Date()
  const day = `${(now.getDate())}`.padStart(2,'0');
  const month = `${(now.getMonth()+1)}`.padStart(2,'0');
  const year = now.getFullYear();
  const date = now.getDate();
  const minutes = now.getMinutes()
  const hours = now.getHours()
  return `${day}/${month}/${year}/${hours}:${minutes}`
 }

//console.log(signUp());
console.log(usersArr)

/*let userNameInput = "Enteryour firstname".replace(/\s/g, '_')
console.log(userNameInput)*/

//3.The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

//a.
function rateProduct(name) {
  for (let i = 0; i < products.length; i++) {
    if (products[i].name == name) {
      return products[i].ratings;
    }
  }
}

console.log(rateProduct('mobile phone'));

function averageRating(name) {
  let ratingArr = rateProduct(name);
  if (ratingArr.length === 0) {
    console.log('Ratings not found');
  } else if (ratingArr.length) {
    let rateSum = 0;
    for (let i = 0; i < ratingArr.length; i++) {
      rateSum += ratingArr[i].rate;
    }
    console.log(rateSum / ratingArr.length);
  }
}

averageRating('mobile phone');
averageRating('Laptop')
averageRating('TV')

//4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
/*function currentUser() {
  let userNameInput = prompt('Enter your first name.');
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === userNameInput) {
      let userId = users[i]._id;
      return userId;
    }
  }
}*/

