// 1.question
let dog = {};
// 2.question
console.log(dog);
// 3.question
dog.name = 'cesar';
dog.age = 4;
dog.color = 'gold';
dog.bark = function() {
     return 'woof-woof'
};
// 4.question
let name = dog.name,
     age = dog.age,
     color = dog.color,
     bark = dog.bark();
console.log(bark);
// 5.question
dog.breed = 'golden retriever';
dog.getDogInfo = function () {
     return `${this.name} is an ${this.breed} and his age is ${this.age} and his color is ${this.color} he sound like ${this.bark()}`
}
