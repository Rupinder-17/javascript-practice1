//   count length of string 
var str = "javascript is a great language"

var strlength = str.length
console.log(strlength)

// upperCase and lowerCase

let nam = "Rupinder KaUR"

//  let str1 = nam.toUpperCase();
let str1 = nam.toLowerCase()
console.log(str1)


// includes

let str2= str.includes("language")
console.log(str2)

//  startWith

let str3 = str.startsWith("java")
console.log(str3)

// endWith

let endnum = str.endsWith("age")
console.log(endnum)

// search return position of particular word

let searchword = str.search("g")
console.log(searchword)

//  match

let strWords= "javascript is a great language but  it is not easy language ";

let resWord= strWords.match(/is/g)

console.log(resWord)

// let lastword = strWords.indexOf("not")


// lastindexof
let lastword = strWords.lastIndexOf("great")
console.log(lastword)

// replace

let strWordss= "javascript is a great language but javascript  is not easy language ";

// let repStr= strWordss.replace("javascript", "c++")
let repStr= strWordss.replace(/javascript/g, "c++")
console.log(repStr)

// charAt return a word acc of their index

// let charnum = strWordss.charAt(20)
let charnum = strWordss.split("g")
console.log(charnum)

// repeat function
let username = "kirandeep kaur"
let resultans = username.repeat(3 )
console.log(resultans)

// slice acc to index

let sliceres = username.slice(3 ,5)
console.log(sliceres)

// substr acc to  number of character eg: 

let firstName= "Ramandeep"

let Rname = firstName.substr(2,5)
console.log(Rname)

// substring  return a value of string b/w 2 and 6 but not display  the 6th position digit

let raName = firstName.substring(2,6)
console.log(raName)

var numbr = 59;
var numb = numbr.toString()
console.log(typeof numb)
// console.log(6+ numbr)


// number functions

let num = "87" 
let num2 = Number(num)
console.log(num2 +5)

// parseInt return a value without decimal

let a = "67.89"

let numb4 = parseInt(a)

console.log(numb4)

// parseFloat

let numbfive = parseFloat(a)
console.log(numbfive)

// Isfinite method
let bb = -200
let bb1 = Number.isFinite(bb) 
console.log(bb1)

// tofixed 
let firstnum = 5.5678
let resFirst = firstnum.toFixed(3)
let resFirst1 = firstnum.toFixed(2)
console.log(resFirst)
console.log(resFirst1)


// toPrecision

let preNum = 6.7888
let resPrenum = preNum.toPrecision(11)
console.log(resPrenum)



let obj={
    firstName: "rupinder",
    lastName: "kaur",
    course: "javascript",

}
obj.surName = "randhawa"
obj["SurName"] = "randhawa"
console.log(obj)
















