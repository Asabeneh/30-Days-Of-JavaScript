console.log(countries)
// alert('Open the console and check if the countries has been loaded')

// Exercises: Level 1
// 1) Create an empty object called dog

var dog = {};

// 2) Print the the dog object on the console

console.log(dog);

// 3) Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.name = "inu";
dog.legs = 4;
dog.color = "blue";
dog.age = 5;
dog.bark = function(){
    return "woof woof";
};

// 4) Get name, legs, color, age and bark value from the dog object
console.log(dog.name);
console.log(dog.legs);
console.log(dog.color);
console.log(dog.age);
console.log(dog.bark());


// 5) Set new properties the dog object: breed, getDogInfo
dog.breed = "shiba inu";
dog.getDogInfo = function(){};

// Exercises: Level 2

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
  };



// 1) Find the person who has many skills in the users object.

var persons = Object.entries(users);

var count = 0;
var person = "";

for(var i = 0; i < persons.length; i++)
{
    if(persons[i][1].skills.length>count)
    {
        count = persons[i][1].skills.length;
        person = persons[i][0];
    }
}
console.log(person + "is the person who has many skills in the users object");

// 2) Count logged in users, count users having greater than equal to 50 points from the following object.

count = 0;
for(var i = 0; i < persons.length; i++)
{
    if(persons[i][1].isLoggedIn == true)
    {
        count ++;
    }
}
console.log(count+" logged in users");

count = 0;
for(var i = 0; i < persons.length; i++)
{
    if(persons[i][1].points > 50)
    {
        count ++;
    }
}
console.log(count+" users having greater to 50 points from the following object");

count = 0;
for(var i = 0; i < persons.length; i++)
{
    if(persons[i][1].points == 50)
    {
        count ++;
    }
}
console.log(count+" users having equal to 50 points from the following object");



// 3) Find people who are MERN stack developer from the users object

function isMERN(skills)
{
    var mern = ['MongoDB', 'Express', 'React', 'Node'];
    for(var i = 0; i < mern.length; i++)
    {
        if(skills.indexOf(mern[i])==-1)
        {
            return false;
        }
    }
    return true;
}

var mern = [];
for(var i = 0; i < persons.length; i++)
{
    if(isMERN(persons[i][1].skills)==true)
    {
        mern.push(persons[i][0]);
    }
}
console.log(mern, "are the mern dev");

// 4) Set your name in the users object without modifying the original users object
users.Faliana = Object.assign({}, users.Paul);
console.log(users.Faliana);

// 5) Get all keys or properties of users object
console.log(Object.keys(users));

// 6) Get all the values of users object
console.log(Object.values(users));

// 7) Use the countries object to print a country name, capital, populations and languages.
console.log("print a country name: ", countries[0].name);
console.log("print a country capital: ", countries[0].capital);
console.log("print a country populations: ", countries[0].population);
console.log("print a country languages: ", countries[0].languages);

// Exercises: Level 3

//     1) Create an object literal called personAccount. It has firstName, lastName, incomes, 
//      expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. 
//      Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

        var personAccount = {
            firstName: "",
            lastName: "",
            incomes: 0,
            expenses: 0,
            totalIncome: function(){},
            totalExpense: function(){},
            accountInfo: function(){},
            addIncome: function(){},
            addExpense: function(){},
            accountBalance: function(){}
        };
        console.log(personAccount);

//     2) **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users2 = [
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

// Imagine you are getting the above users collection from a MongoDB database. 

// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
    
    function signUp(username, email, password)
    {
        var user = {};
        user._id = "random";
        user.username = username;
        user.email = email;
        user.password = password;
        user.createdAt = new Date();
        user.isLoggedIn = false;
        if(checkExistedUser(username, password)==false)
        {
            users2.push(user);
        }
        else
        {
            alert(username+" already an account");
        }
        
    }
    function checkExistedUser(username, password)
    {
        for(var i = 0; i < users2.length; i++)
        {
            if(users2[i].username == username || users2[i].password == password)
            {
                return true;
            }
        }
        return false;
    }
    signUp("poupoussy", "poupoussy@gmail.com", "poupoussypoupoussy");
    console.log(users2);

    // signUp("Alex", "poupoussy@gmail.com", "poupoussypoupoussy");

// b. Create a function called signIn which allows user to sign in to the application
function signIn(email, password)
{
    for(var i = 0; i < users2.length; i++)
    {
        if(users2[i].email==email && users2[i].password==password)
        {
            return "logged in";
        }
    }
    return "wrong email or password";
}
console.log(signIn("poupoussy@gmail.com", "poupoussy"));
console.log(signIn("poupoussy@gmail.com", "poupoussypoupoussy"));



// 3) The products array has three elements and each of them has six properties.

// a. Create a function called rateProduct which rates the product 
function rateProduct(product, user, rate)
{
    product.ratings.push({userId: user._id, rate: rate});
}
// console.log("alala", users2[5]);
rateProduct(products[0], users2[5], 3.69);
console.log(products);

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(product)
{
    var count = 0;
    for(var i = 0; i < product.ratings.length; i++)
    {
        count += product.ratings[i].rate;
    }
    return count/product.ratings.length;
}
console.log("averageRating", averageRating(products[0]))

// 4) Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function likeProduct(product, user){
    if(product.likes.indexOf(user._id)==-1 || product.likes.length==0)
    {
        product.likes.push(user._id);
    }
    else
    {
        product.likes.splice(product.likes.indexOf(user._id), 1);
    }
    // console.log(product.likes);
}
likeProduct(products[0], users2[5]);
console.log("ajout like", products[0]);
likeProduct(products[0], users2[5]);
console.log("delete like", products[0]);

