//Exercises Level 1
    //Exercise 1 -- Create an empty object called dog
        let dog = {};

    //Exercise 2 -- Print the the dog object on the console
        console.log(dog);

    //Exercise 3 -- Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
        dog = {
            name: "Sam",
            age: 2,
            legs: 4,
            color: 'Golden',

            bark: function () {
                return "WOOF WOOF";
            }
        };
        console.log(dog);

    //Exercise 4 -- Get name, legs, color, age and bark value from the dog object
        console.log(`Dogs name: ${dog.name}, age: ${dog.age}, legs: ${dog.legs}, color: ${dog.color}, bark value: ${dog.bark()}`);

    //Exercise 5 -- Set new properties the dog object: breed, getDogInfo
        dog.breed = "Golden Retriever";
        dog.getDogInfo= function() 
        {
            console.log(`My dog's name is ${dog.name} he is a ${dog.color}, ${dog.breed}.  He has ${dog.legs} legs and his age is ${dog.age} years old`);
        }

        dog.getDogInfo();

// Exercises Level 2
  const users2 = {
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

  //Exercise 1 -- Find the person who has the most skills in the users object.
      function getMostSkills()
      {
          let max = Number.MIN_SAFE_INTEGER;
          let res = undefined;
          for (const key in users2)
          {
              const user = users2[key];
              if (user.skills.length > max)
              {
                  max = user.skills.length;
                  res = user;
              }
          }
          return res;
      }
      console.log(getMostSkills());

  //Exercise 2 -- Count logged in users, count users having greater than or equal to 50 points from the following object.
  //Uses same users object as Exercise Level 2, Exercise 1
    function countLoggedInUsers()
    {             
      let loggedInUserCount = 0;
      let greaterThen50Points = 0;
      for(const key in users2)
      {
        const user = users2[key];

        if(user.isLoggedIn)
          loggedInUserCount=loggedInUserCount+1;
        else if(user.points>=50)
          greaterThen50Points=greaterThen50Points+1;
      }
      console.log(`Number of logged in users: ${loggedInUserCount}`);
      console.log(`Number of users having over greater then or equal to 50 points: ${greaterThen50Points}`);
    }
    countLoggedInUsers();

  //Exercise 3 -- Find people who are MERN stack developer from the users object
    function MERNstack() {
      const requiredSkills = ['mongodb', 'express', 'react', 'node'];

      for (const username in users2) {
        const user = users2[username];
        let hasAllRequiredSkills = true;

        for (let i = 0; i < requiredSkills.length; i++) {
          const requiredSkill = requiredSkills[i].toLowerCase(); // Convert to lowercase
          let hasRequiredSkill = false;

          for (let j = 0; j < user.skills.length; j++) {
            const userSkill = user.skills[j].toLowerCase(); // Convert user's skill to lowercase

            if (userSkill === requiredSkill) {
              hasRequiredSkill = true;
              break; // Skill found, no need to continue searching
            }
          }

          if (!hasRequiredSkill) {
            hasAllRequiredSkills = false;
            break; // Exit the loop as soon as one required skill is missing
          }
        }

        if (hasAllRequiredSkills) {
          console.log(`${username} is a MERN developer`);
        }
      }
    }
    MERNstack();

  //Exercise 4 -- Set your name in the users object without modifying the original users object
  const newUser = {
    Brendan: {
      email: 'deliveritthere@gmail.com',
      skills: ['HTML', 'CSS', 'JavaScript','Mongodb','Express','React','Node'],
      age: 23,
      isLoggedIn: true,
      points: 15
    }
  };
  
  const updatedUsers = { ...users2, ...newUser };

  //Exercise 5 -- Get all keys or properties of users object
    const keys = Object.keys(users2);
    console.log(keys);

  //Exercise 6 -- Get all the values of users object
    let valuesArray = Object.values(users2);
  
      for (let value of valuesArray)
      {
        console.log(value);
      }

  //Exercise 7 -- Use the countries object to print a country name, capital, populations and languages.
    console.log(`name: ${countries[0].name}, capital: ${countries[0].capital}, population: ${countries[0].population}, languages: ${countries[0].languages}`);
  
// Exercises: Level 3
  //Exercise 1 -- Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo, addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
    const personAccount = {
      firstName: 'Brendan',
      lastName: 'Klein',
      incomes: { salary: 100000, sidehustle: 120 },
      expenses: { dte: 200, consumers: 50, water: 20, trash: 0 }, 

      addIncome:function(description, amount)
      {
        personAccount.incomes[description]=amount;
      },

      addExpenses:function(description, amount)
      {
        personAccount.expenses[description]=amount;
      },
      
      totalIncome:function()
      {
        let totalIncome=0;
        for(income in personAccount.incomes)
        {
          totalIncome = totalIncome + personAccount.incomes[income];
        }
        return totalIncome;
      },

      totalExpenses:function()
      {
        let totalExpenses = 0;
        for(expense in personAccount.expenses)
        {
          totalExpenses = totalExpenses + personAccount.expenses[expense];
        }
        return totalExpenses;
      },

      accountBalance:function()
      {
        let accountBalance = personAccount.totalIncome() - personAccount.totalExpenses();

        return accountBalance;
      },

      accountInfo:function()
      {
        console.log(`First name: ${personAccount.firstName}`);
        console.log(`Last name:  ${personAccount.lastName}`);
        console.log(`Total Income: ${personAccount.totalIncome()}`);
        console.log(`Total Expenses ${personAccount.totalExpenses()}`);
        console.log(`Account Balance ${personAccount.accountBalance()}`);
      }
    }
    personAccount.accountInfo();

  //Exercise 2 -- ***** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
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
    
  // Imagine you are getting the above users collection from a MongoDB database. 
    //a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.

      // function signUp(username, email, password)
      // {
      //   if(Object.values(users).includes(username) && Object.values(users).includes(email))
      //     return "The username provided already has an account"
      //   else
      //   {
      //     Object.assign({},users,{'_id': 123456, 'username': username});
      //   }
        
      //   console.log(users);
      // }


      // signUp('bklein', 'deliveritthere@gmail.com', '12385');

    // b. Create a function called signIn which allows user to sign in to the application
      users.signIn = function()
      {

      }

  //Exercise 3 -- The products array has three elements and each of them has six properties. 
    //a. Create a function called rateProduct which rates the product 
      products.rateProduct = function(name, rating)
      {

      }
  
    //b. Create a function called averageRating which calculate the average rating of a product
      products.averageRating = function()
      {
        console.log(`------------------------------------------------------------------------------------`);
        for(item in products)
        {
          let numRatings = 0;
          let addRatings = 0;
          let itemName = products[item].name;

          for(rate in products[item].ratings)
          {
            addRatings = addRatings + products[item].ratings[rate].rate;
            numRatings = numRatings+1;
          }
          addRatings = addRatings / numRatings;

          if(itemName == "")
            continue;

          if(isNaN(addRatings))
            addRatings="No ratings for that product!";

          console.log(`${itemName} has an average rating of: ${addRatings}`);
        }
        console.log(`------------------------------------------------------------------------------------`);
      }

      products.averageRating();

    //Exercise 4 -- Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.