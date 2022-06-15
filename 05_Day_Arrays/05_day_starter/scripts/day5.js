const arr = []
const array = Array(5)
console.log(array.length)
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]
console.log(webTechs[0] + ' '+ webTechs[Math.floor((webTechs.length)/2.0)] + ' '+ webTechs[webTechs.length -1])
const mixedDataTypes = ['number', 0, 0.1, [1,3], true, false]
console.log(mixedDataTypes.length)
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies)
    itCompanies[i].toUpperCase()
    console.log(itCompanies[i].toUpperCase())
}
if (itCompanies.includes('netflix')) {
    console.log('netflix')
}else{
    console.log('not found')
}
let o_counter = 0
for (let i = 0; i < itCompanies.length; i++) {
    let company = itCompanies[i].split('')
    for (let j = 0; j < company.length; j++) {
        if (company[j] == 'o') {
            o_counter++
        }
    }
    if (o_counter > 1) {
        console.log(itCompanies[i])
        o_counter = 0
    }
}
itCompanies.sort()
console.log(itCompanies)
itCompanies.reverse()
console.log(itCompanies)
console.log(itCompanies.slice(0,3))
console.log(itCompanies.slice((itCompanies.length/2.0)+1, itCompanies.length))
if (itCompanies.length % 2.0 == 0 ) {
    console.log(itCompanies[Math.floor(itCompanies.length/2.0)] + " "+ itCompanies[Math.floor(itCompanies.length/2.0)+1])
}else{
    console.log(itCompanies[Math.floor(itCompanies.length/2.0)])
}
console.log(itCompanies)
itCompanies.shift()
console.log(itCompanies)
if (itCompanies.length % 2.0 == 0 ) {
    itCompanies.splice(Math.floor(itCompanies.length/2.0),1)
    itCompanies.splice(Math.floor(itCompanies.length/2.0),1)
}else{
    itCompanies.splice(Math.floor(itCompanies.length/2.0))
}
console.log(itCompanies)
itCompanies.pop()
console.log(itCompanies)

//exercise 2
let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.split('.')
console.log(text)
text = text.join('')
text = text.split(',')
text = text.join('')
text = text.split(" ")
console.log(text)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push('Sugar')
let honey = shoppingCart.indexOf('Honey')
shoppingCart.splice(honey,1)
console.log(shoppingCart)
let tea = shoppingCart.indexOf('Tea')
shoppingCart.splice(tea,1,'Green Tea')
console.log(shoppingCart)

//exercise 3
let ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages = ages.sort()
console.log(ages[0])
console.log(ages[ages.length-1])
if (ages.length %2 == 0) {
    console.log(ages[Math.floor(ages.length/2)] + " "+ages[Math.floor(ages.length/2)+1])
}else{
    ages[Math.floor(ages.length/2)]
}
let average = 0
for (let i = 0; i < ages.length; i++) {
    average +=ages[i]
}
average = average/ages.length
console.log(ages[ages.length-1] - ages[0])
console.log(Math.floor(Math.abs(ages[0] - average)) + " " + Math.floor(Math.abs(ages[ages.length-1] - average)))
console.log(countries)