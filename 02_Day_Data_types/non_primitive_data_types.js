let nums = [1, 2, 3]
nums[0]=10
console.log(nums) // [10, 2, 3]

let nums1 = [1, 2, 3]
let numbers = [1, 2, 3]
console.log(nums1 == numbers) // false

let userOne = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
let userTwo = {
  name: 'Asabeneh',
  role: 'teaching',
  country: 'Finland'
}
console.log(userOne == userTwo) // false

let numbers2 = nums
console.log(nums == numbers2)  // true

let userThird = {
name:'Asabeneh',
role:'teaching',
country:'Finland'
}

var  userFourth = {
  name:'Asabeneh',
  role:'teaching',
  country:'Finland'
}
 userFourth = userThird
console.log(userFourth == userThird)  // true