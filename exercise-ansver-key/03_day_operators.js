
//todo day3_level1 1.exercise 

// let name = "nevzat"
// let lastName = "atalay"
// let country = "turkey"
// let city = "bitlis"
// let age = 25
// let isMarried = true
// console.log(typeof(name),typeof(lastName),typeof(country),typeof(city),typeof(age),typeof(isMarried))

//todo day3_level1 2.exercise 

// let number ="10"
// console.log(number==10)

//todo day3_level1 3.exercise 

// let number = parseInt(9.8)
// console.log(number==10)

//todo day3_level1 4.exercise 

// console.log(!!"merhaba")
// console.log(!!1)
// console.log(!![])

// console.log(!!"")
// console.log(!!0)
// console.log(!!null)

//todo day3_level1 5.exercise 

// const arr = [
//     4 > 3,
//     4 >= 3,
//     4 < 3,
//     4 <= 3,
//     4 == 4,
//     4 === 4,
//     4 != 4,
//     4 !== 4,
//     4 != '4',
//     4 == '4',
//     4 === '4',
//     ]
// console.log(arr)

// let string = "phyton", string1 = "jargon"
// console.log(string.length >= string1.length )

//todo day3_level1 6.exercise 

/*
const arr = [
    4 > 3 && 10 < 12,
    4 > 3 && 10 > 12,
    4 > 3 || 10 < 12,
    4 > 3 || 10 > 12,
    !(4 > 3),
    !(4 < 3),
    !(false),
    !(4 > 3 && 10 < 12),
    !(4 > 3 && 10 > 12),
    !(4 === '4')]
    console.log(arr)
*/

// let string = "phyton", string1 = "jargon"
// console.log(string.includes("on") && string1.includes("on"))

//todo day3_level1 7.exercise 

// let now = new Date()

// console.log(now.getFullYear())
// console.log(now.getMonth()+1)
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getTime())

//? day3_level2 1.exercise

// let width =Number(prompt("üçgenin genişligini giriniz"))
// let height =Number(prompt("üçgenin yğksekliğini giriniz"))
// let area = width*height / 2
// console.log(area)

//? day3_level2 2.exercise

// let width =Number(prompt("üçgenin a kenarını  giriniz"))
// let height =Number(prompt("üçgenin yüksekliğini giriniz"))
// let widthb = Number(prompt("üçgenin b kenarını giriniz"))
// let perimeter = width+height+widthb
// console.log(perimeter)

//? day3_level2 3.exercise

// let width = Number(prompt("dikdörtgenin  genişliğini  giriniz"))
// let height = Number(prompt("dikdörtgenin yüksekliğini giriniz"))
// let perimeter = 2*(width+height) 
// console.log(perimeter)

//? day3_level2 4.exercise

// let r = 5
// let area = Math.PI  *  r**2
// console.log(area)

//? day3_level2 5.exercise

// let slope = 2 //x in katsayısı egimi verir
// let x_intercept = 1
// let y_intercept = 2
// console.log(`denklemin eğimi ${slope}, x in kesme noktası ${x_intercept}, y nin kesme noktası ${y_intercept} dir`)

//? day3_level2 6.exercise

// let x1 =2 , x2 = 6
// let y1 = 2 ,y2 =10
// let slope =( y2 - y1 ) / (x2 - x1)
// console.log(slope)

//? day3_level2 7.exercise

// let slope1 = 2
// let slope2 = 2
// console.log(slope1==slope2)

//? day3_level2 8.exercise

// let y = (x + 3)**2
// let x = [-3,-2,-1,0,1,2,3]
// y nin 0 debuggeri için x -3tür

//? day3_level2 9.exercise

// let hours = Number(prompt("günde kaç saat çalışıyorsunuz"))
// let workingWage = Number(prompt("saatlik çalışma ücretinizi giriniz"))
// let wage = hours*workingWage*30
// console.log(`maaşınız ${wage} tl dir`)


//? day3_level2 10.exercise

// let myName = "nevzat"
// if(myName.length > 7){
//     console.log("adınız uzundur")
// }
// else{
//     console.log("adınız kıssadır")
// }


//? day3_level2 11.exercise

// let myName = "nevzat"
// let myLastName = "talay"
// if(myName.length > myLastName.length){
//  console.log(`adınız nevzat soyadınız atalaydan daha uzundur`)   
// }
// else{
//     console.log("soyadınız atalay adınız nevzattan daha uzundur")
// }


//? day3_level2 12.exercise

// let myAge =25
// let yourAge =18
// let message = myAge - yourAge > yourAge - myAge ? "ben senden büyüğüm" : "sen benden büyüksün"
// console.log(message)


//? day3_level2 13.exercise

// let birtYear = Number(prompt("doğum yılınızı giriniz"))
// let now = new Date()
// let year = now.getFullYear()
// let age = year - birtYear
// if(age >=18){
//     console.log("ehliyet sınavına başvuru yapabilirsiniz")
// }
// else{
//     console.log(`ehliyet sınavına başvuru yapabilmeniz için ${18-age} yıl beklemeniz gerekmektedir`)
// }


//? day3_level2 14.exercise

// let age = Number(prompt("kaç yaşındasınız"))
// let lastSecond = age*365*24*60*60
// let remainingSeconds = (100*365*24*60*60) - (lastSecond)
// console.log(`en fazla ${remainingSeconds} saniye ömrÜn kaldı WAKW UP`)


//? day3_level2 15.exercise

// let now = new Date()

// let year = now.getFullYear()
// let mount = now.getMonth()
// let day = now.getDay()
// let hours = now.getHours()
// let minuts = now.getMinutes()

// console.log(`${year}-${mount}-${day}           ${hours} : ${minuts}`)
// console.log(`${day}-${mount}-${year}           ${hours} : ${minuts}`)
// console.log(`${year} / ${mount} / ${day}       ${hours} : ${minuts}`)

//! day3_level3 1.exercise 

// let now = new Date()

// let year = now.getFullYear()
// let mount = String(now.getMonth()+1).padStart(2,'0')
// let day = String(now.getDate() ).padStart(2,'0')
// let hour = String(now.getHours()).padStart(2,'0')
// let minut = String(now.getMinutes()).padStart(2,'0')
// console.log(`${day} / ${mount} / ${year} ${hour} : ${minut}`)
