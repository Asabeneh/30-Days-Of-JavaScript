console.log(countries)
// alert('Open the browser console whenever you work on JavaScript')
// alert('Open the console and check if the countries has been loaded')

// number 1
const emptyArray0 = []

// number 2
const arryFiveElements = [1, 2, 3, 4, 5]

// number 3
console.log(arryFiveElements.length) // 5

// number 4
console.log(arryFiveElements[0])
console.log(arryFiveElements[2])
console.log(arryFiveElements.length - 1)

// number 5
const mixedDataType = [1, 23, 34, 'fruit', 'rice', 'beans', true, false, false, false, false]
console.log(mixedDataType.length)

// number 6
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']

// number 7
console.table(itCompanies)

// number 8
console.log(itCompanies.length)

// number 9
console.table(itCompanies[0])
console.table(itCompanies[2])
console.table(itCompanies[6])

// number 10
console.table(itCompanies[0])
console.table(itCompanies[1])
console.table(itCompanies[2])
console.table(itCompanies[3])
console.table(itCompanies[4])
console.table(itCompanies[5])
console.table(itCompanies[6])

// number 11
const upper0 = itCompanies[0].toUpperCase()
const upper1 = itCompanies[1].toUpperCase()
const upper2 = itCompanies[2].toUpperCase()
const upper3 = itCompanies[3].toUpperCase()
const upper4 = itCompanies[4].toUpperCase()
const upper5 = itCompanies[5].toUpperCase()
const upper6 = itCompanies[6].toUpperCase()
console.log(upper0)
console.log(upper1)
console.log(upper2)
console.log(upper3)
console.log(upper4)
console.log(upper5)
console.log(upper6)

// number 12
console.log(`${itCompanies[0]} , ${itCompanies[1]} , ${itCompanies[2]} , ${itCompanies[3]} , ${itCompanies[4]} , ${itCompanies[5]} and ${itCompanies[6]} are big IT companies`)

// number 13
const exist = itCompanies.includes('Facebook')

    if (exist == true) {
        console.log(itCompanies[0])
    }else{
        console.log('comany not found')
    }

// number 14
