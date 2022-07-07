//Exercises

//1.Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem('firstName', 'Jose') // since the value is string we do not stringify it
console.log(localStorage)

//Exercises: Level 2

//2.Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
student = {
    firstName: 'Juan',
    lastName:  'Gomez',
    age:       30,
    skills:   ['HTML', 'CSS', 'JavaScript'],
    country: 'Col'
}

txtStudent = JSON.stringify(student,undefined, 4)
setStorage = localStorage.setItem('student', txtStudent)

//Exercises: Level 3

//1.Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
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
  txtPersonAccount = JSON.stringify(personAccount, null, 2)
  localStorage.setItem('PersonAccount', txtPersonAccount)
  let getItem = localStorage.getItem('firstName')
  console.log(getItem)


  const user = {
    firstName: 'Asabeneh',
    age: 250,
    skills: ['HTML', 'CSS', 'JS', 'React']
  }
  
  const userText = JSON.stringify(user, undefined, 4)
  localStorage.setItem('user', userText)

  let skills = localStorage.getItem('user')
  
  console.log(skills)