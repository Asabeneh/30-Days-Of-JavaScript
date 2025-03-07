// 1.question
const countries = [
     'Albania',
     'Bolivia',
     'Canada',
     'Denmark',
     'Ethiopia',
     'Finland',
     'Germany',
     'Hungary',
     'Ireland',
     'Japan',
     'Kenya'
];
let contryCopy = [...countries];
// 2.question
let sortedCountires = countries.slice();
sortedCountires.sort();
console.log(sortedCountires);
// 3.question
const mernStack = ['MongoDB', 'Express', 'React', 'Node']
const webTechs = [
     'HTML',
     'CSS',
     'JavaScript',
     'React',
     'Redux',
     'Node',
     'MongoDB'
];
mernStack.sort();
webTechs.sort();
// 4.question and 6.question
let conLand = [];
for (const iterator of countries) {
     if (iterator.includes('land')) {
          conLand.push(iterator)
     }
}
console.log(conLand);
// 5.question and 7.question
let max = 0;
let maxi = 0;
let high = []
for (let i = 0; i < countries.length; i++){
     if (max < countries[i].length) {
          max = countries[i].length;
          maxi = i;
     }
}
high.push(countries[maxi]);
console.log(high);
// 8.question
let newc = []
for (const iterator of countries) {
     if (iterator.length >= 2) {
          newc.push(iterator)
     }
}
console.log(newc);
// 9.question
newc = []
countries.reverse();
for (const iterator of countries) {
     newc.push(iterator.toUpperCase())
}
console.log(newc);