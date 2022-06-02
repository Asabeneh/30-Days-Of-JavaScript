// let age = prompt('age?')
// if(age > 18){
//     console.log('you are old enough to drive')
// }else{
//     console.log(`you are left with ${18-age} years to drive`)
// }
// let myAge = prompt('my age?')
// let yourAge = prompt('your age?')
// if(myAge< yourAge){
//     console.log(`you are ${yourAge-myAge} years older than me`)
// }
// let a = 4
// let b = 3
// a>b
//     ?console.log(`${a} is greater than ${b}`)
//     :console.log(`${b} is greater than ${a}`)
// let num = prompt('number')
// if(num%2 == 0){
//     console.log(`${num} is an even number`)
// }else{
//     console.log(`${num} is an odd number`)
// }

// //exercise 2
// let grade = prompt('grade?')
// switch(grade){
//     case (grade >=80) &&(grade <= 100):
//         console.log('A')
//     case (grade >=70) &&(grade <= 79):
//         console.log('B')
//     case (grade >=60) &&(grade <= 69):
//         console.log('C')
//     case (grade >=50) &&(grade <= 59):
//         console.log('D')
//     case (grade >=0) &&(grade <= 49):
//         console.log('F')
// }
// let season = prompt('season')
// switch(season){
//     case ((season == 'September')||(season == 'October')||(season =='November')):
//         console.log('the season is Autumn')
//     case ((season == 'December')||(season == 'January')||(season =='February')):
//         console.log('the season is Winter')
//     case ((season == 'March')||(season == 'April')||(season =='May')):
//         console.log('the season is Spring')
//     case ((season == 'June')||(season == 'July')||(season =='August')):
//         console.log('the season is Summer')
// }
// let week = prompt('what day of the week')
// if((week =="Saturday") || (week == "Sunday")){
//         console.log(`${week} is a weekend`)
// }else{
//     console.log(`${week} is a working day`)
// }
//exercise 3
let year = prompt('enter year')
let month = prompt('enter month')
switch(month){
    case 'January':
        console.log(`${month} has 31 days`)
        break
    case 'February':
        if((year % 4 ==0 ) && (year % 100 != 0)){
            console.log(`${month} has 29 days`)
            break
        }else{
            console.log(`${month} has 28 days`)
            break
        }
    case "March":
        console.log(`${month} has 31 days`)
        break
    case "April":
        console.log(`${month} has 30 days`)
        break
    case "May":
        console.log(`${month} has 31 days`)
        break
    case "June":
        console.log(`${month} has 30 days`)
        break
    case "July":
        console.log(`${month} has 31 days`)
        break
    case "August":
        console.log(`${month} has 31 days`)
        break
    case "September":
        console.log(`${month} has 30 days`)
        break
    case "October":
        console.log(`${month} has 31 days`)
        break
    case "November":
        console.log(`${month} has 30 days`)
        break
    case "December":
        console.log(`${month} has 31 days`)
        break
    default:
        console.log('\n end ' + month)
        break
}
