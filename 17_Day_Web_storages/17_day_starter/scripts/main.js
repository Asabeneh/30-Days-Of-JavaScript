// Exercises: Level 1

//     1- Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("firstName", "Faliana");
localStorage.setItem("lastName", "Ranai");
localStorage.setItem("age", 21);
localStorage.setItem("country", "Madagascar");
localStorage.setItem("city", "Antananarivo");

console.log(localStorage)
console.log(localStorage.getItem("city"))

// Exercises: Level 2

//     1- Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. 
// Store the student object in your browser localStorage.
var student = { firstName: 'Jean', lastName: 'Rakoto', age: 29, skills: ['PHP', 'Python']};
localStorage.setItem("student", JSON.stringify(student))
console.log(localStorage)            
// console.log(JSON.parse(localStorage.getItem("student"))) 

// Exercises: Level 3

//     1- Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
