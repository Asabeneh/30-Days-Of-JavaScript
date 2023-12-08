 
# Day 8 - Object
 

## [Exercise:Solutions](#exercise-solutions)

- ### [Exercise:Level 1](#exercises-level-1)
- ### [Exercise:Level 2](#exercises-level-2)
- ### [Exercise:Level 3](#exercises-level-3) <hr>

 #### [Home](../README.md) | [<< Day 6](./06_day_loops.md) | [Day 8 >>](./08_day_object.md)


## Exercise Solutions

### Exercises Level 1
 
 1. Create an empty object called dog

```js
//app.js
dog = {}
```
2. Print the the dog object on the console

```js
//app.js

dog = {}
console.log(dog)
```


 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
```js
//app.js

dog = {
    name:'garip',
    legs:4,
    age:6,
    color:'black',
    bark:'woof woof'
  }
  console.log(dog)
```


 4. Get name, legs, color, age and bark value from the dog object
```js
//app.js

dog = {
    name:'garip',
    legs:4,
    age:6,
    color:'black',
    bark:'woof woof'
  }
console.log(dog.name)
console.log(dog.legs) 
console.log(dog['age'])
console.log(dog['color'])  
console.log(dog['bark']) 
```

 5. Set new properties the dog object: breed, getDogInfo
```js
//app.js

dog = {
    name:'garip',
    legs:4,
    age:6,
    color:'black',
    bark:'woof woof'
  }
dog.breed = 'kangal'
console.log(dog.breed)
```

### Exercises Level 2

1. Find the person who has many skills in the users object.

```js
//app.js
  let maxSkills = 0;
let mostSkilledUser = "";
for (let user in users) {
    if (users[user].skills.length > maxSkills) {
        maxSkills = users[user].skills.length;
        mostSkilledUser = user;
    }
}
console.log(mostSkilledUser + " isimli kullanıcının yetenek sayısı: " + maxSkills);

```

2. Count logged in users, count users having greater than equal to 50 points from the following object.

```js
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

  
let pointsIsFifty = 0;

for (let user in users) {
  if (users[user].points == 50) {
    pointsIsFifty++;
  }
}

console.log(pointsIsFifty);
```

3. Find people who are MERN stack developer from the users object
```js
//app.js
let mernStackDevelopers = [];

for (let user in users) {
    if (users[user].skills.includes('MongoDB', 'Express', 'React', 'Node')) {
        mernStackDevelopers.push(user);
    }
}
console.log(mernStackDevelopers)
```
4. Set your name in the users object without modifying the original users object
```js
//app.js
const myName = "Nevzat";
const newUsers = {...users, [myName]: {email: 'bing@microsoft.com', skills: ['search', 'AI'], age: 3, isLoggedIn: true, points: 100}};

console.log(newUsers);
```
5. Get all keys or properties of users object
```js
//app.js
const keys = Object.keys(users);
console.log(keys);
```
6. Get all the values of users object
```js
//app.js
const value = Object.keys(users);
console.log(value);
```
7. Use the countries object to print a country name, capital, populations and languages.
```js
//app.js
for(let country in countries){
  console.log(country)
  console.log(countries[country].capital)
  console.log(countries[country].populations)
  console.log(countries[country].langue)
}
```

### Exercises Level 3

1. Create an object literal called _personAccount_. It has _firstName, lastName, incomes, expenses_ properties and it has _totalIncome, totalExpense, accountInfo,addIncome, addExpense_ and _accountBalance_ methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
```js
//app.js
const personAccount = {
  firstName: "Nevzat",
  lastName: "Atalay",
  incomes: [
      {description: "Maaş", amount: 5000},
      {description: "Kira", amount: 1000},
      {description: "Yatırım", amount: 2000}
  ],
  expenses: [
      {description: "Kira", amount: 500},
      {description: "Yemek", amount: 200},
      {description: "Eğlence", amount: 100}
  ],
  totalIncome: function() {
      let sum = 0;
      for (let i = 0; i < this.incomes.length; i++) {
          sum += this.incomes[i].amount;
      }
      return sum;
  },
  totalExpense: function() {
      let sum = 0;
      for (let i = 0; i < this.expenses.length; i++) {
          sum += this.expenses[i].amount;
      }
      return sum;
  },
  accountInfo: function() {
      return "Hesap sahibi: " + this.firstName + " " + this.lastName + "\nToplam gelir: " + this.totalIncome() + "\nToplam gider: " + this.totalExpense();
  },
  addIncome: function(description, amount) {
      this.incomes.push({description: description, amount: amount});
  },
  addExpense: function(description, amount) {
      this.expenses.push({description: description, amount: amount});
  },
  accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
  }
};

console.log(personAccount.accountInfo());
personAccount.addIncome("Bonus", 1000);
personAccount.addExpense("Kira", 750);
console.log(personAccount.accountBalance());

```

2. Questions:2, 3 and 4 are based on the following two arrays:users and products ()

```js
      const users = [
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
  ```

  2. Imagine you are getting the above users collection from a MongoDB database.
- a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

```js
// app.js
const users = [
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
    }
 ]

function signUp(user) {
    for (let existing_user of users) {
        if (existing_user.email === user.email) {
            return console.log("User already exists")
        }
    }
    users.push(user);
    return console.log("User added successfully")
}

let newUser ={
    _id: 'fg12cy',
    username: 'Asab',
    email: 'asab@asab.com',
    password: '123456',
    createdAt:'08/01/2020 9:30 AM',
    isLoggedIn: true
}

signUp(newUser)
```
- b. Create a function called signIn which allows user to sign in to the application  
```js
//app.js
const users = [
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
    }
 ]

 function signIn(email, password) {
    for (let user of users) {
        if (user.email === email && user.password === password) {
            user.isLoggedIn = true;
            return console.log("Sign in successful")
        }
    }
    return console.log("Invalid email or password");
}

signIn("asab@asab.com","123456")
```

3. The products array has three elements and each of them has six properties.
- a. Create a function called rateProduct which rates the product
```js
//app.js

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
function rateProduct(productId, userId, rating) {
    for (let product of products) {
        if (product._id === productId ) {
            product.ratings.push({ userId: userId, rate: rating });
            return console.log("Product rated successfully");
        }
    }
    return console.log("Product not found");
}

rateProduct("hedfcg","fg12cy",5)
```
- b. Create a function called averageRating which calculate the average rating of a product
```js
//app.js

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
  function averageRating(productId) {
    let product = products.find(p => p._id === productId);
    if (!product) {
        return console.log("Product not found");
    }
    if (product.ratings.length === 0) {
        return console.log( "No ratings yet");
    }
    let sum = product.ratings.reduce((a, b) => a + b.rate, 0);
    let avg = sum / product.ratings.length;
    return `The average rating for ${product.name} is ${avg.toFixed(2)}`;
}

averageRating("aegfal")
``` 

4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
```js
//app.js

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


  function likeProduct(productId, userId) {
    let product = products.find(p => p._id === productId);
    if (!product) {
        return console.log("Product not found");
    }
    if (product.likes.includes(userId)) {
        product.likes = product.likes.filter(id => id !== userId);
        return console.log("Like removed successfully");
    } else {
        product.likes.push(userId);
        return console.log("Product liked successfully");
    }
}

likeProduct("hedfcg","hedfcg")
```