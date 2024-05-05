let arr = ["raman", "kiran", "arsh"]
//  let arr1 = arr.push("aman")
console.log(arr)
let deleteditem = arr.pop()
console.log(deleteditem)

// concat

let courselist = ["js", "java", "PHP", "c++"]
let subjets = ["punjabi", "english", "hindi"]
let allsub = courselist.concat(subjets)
console.log(allsub)

//  unshift work as push method but from the start

let userData = ["firstname", "lastname", "image", "salary"]
//  userData.unshift("userId")

// shift work as pop but from the stating index

userData.shift()
console.log(userData)

// slice method

let jobs = ["doctors", "teacher", "engineer", "policeman",]
// console.log(jobs.slice(1,3))

// splice
let numArray = [3, 5, 7, 8, 2, 9, 99, 77, 5]
//    numArray.splice(2,4,55,777)
// add items with splice
// numArray.splice(2, 0, 999,888)


// delete with splice
numArray.splice(3, 1)

// one item deleted from 3rd index

// replace with splice
// numArray.splice(6 ,1,989)

// splice act as a slice
numArray.splice(5)

console.log(numArray)

var companies = ["Microsoft", "Uber", "Google", "Wirpo", "jio", "IBM"]
// companies.shift()
// companies.splice(1,1,"Olx")
companies.push("Amazon")
console.log(companies)







