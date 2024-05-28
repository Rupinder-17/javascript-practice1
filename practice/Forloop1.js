
let arr = [3,3,3,3,7,8,6,6,7,7,8,8,9]
const newarr =[]

for(let index =0; index<arr.length; index++){
    const element = arr[index]
    // console.log(element)
    // console.log(!newarr.includes(element))
    if(!newarr.includes(element)){
        newarr.push(element)
    }
}
// console.log(newarr)


let arr1 = [3, 1,6,8]
let arr2 = [1,2,3,4,6]
let resArr = [];

// for(let index=0; index< arr1.length; index++){
//     let element =arr1[index]
//     // console.log(element)
//     for(let index = 0; index<arr2.length; index++){
//         let element2 = arr2[index]
//         // console.log(element2)
//         if(element===element2 && !resArr.includes(element2)){
//             resArr.push(element)
//         }
//     } 
// }

// console.log(resArr)

for(let index=0; index<arr1.length; index++){
    let elm = arr1[index]
    if(arr2.includes(elm)){
        resArr.push(elm)
    }
}
// console.log(resArr)

for(const element of arr1){
    if(arr2.includes(element)){
        resArr.push(element)
    }
}
// console.log(resArr)

let numb = [3,5,1,9,8]
let minimum = numb[1]
// console.log(minimum)

for(const element of numb){
    // console.log(numb)
    // console.log(element)
    if(element<minimum){

        console.log(element)
        console.log(minimum)
        minimum= element
        // console.log(minimum=element)
    }
}
// console.log(minimum)




let arrMax = [1,100,88,66,7,8,9]
let max =arrMax[0]
// console.log(max)
for(const element of arrMax){
    if(element>max){
        max = element
    }
    
}
// console.log(max)

let sumArr = [5,7,8,4,5,3,6]
let sum =0
for(const element of sumArr){
    sum += element
}
// console.log(sum)


let evenNum = [1,6,8,4,9,7,5]
let finalArr = []
for(const element of evenNum){
    if(element%2===0){
        finalArr.push(element)
    }
}
// console.log(finalArr)

let a =evenNum[0]
for(const element of evenNum){
    if(element<a){
        a = element
    }
}
// console.log(a)


let fruitArr = ['apple', 'banana', 'orange', 'kiwi']
let capArr =[]

for(const element of fruitArr){

    let capitalize =element.charAt(0).toUpperCase() + element.slice(1)

    capArr.push(capitalize)

    // console.log(capitalize)
    // let remaingString = element.slice(1)
    // console.log(remaingString)
    // let finalString = capitalize + remaingString
    // console.log(finalString)
    // capArr.push(finalString)
}

// console.log(capArr)
let fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'orange'];

let appleCount = 0

for(const element of fruits){
    if(element==="apple"){
        appleCount = appleCount +1
    }
}
// console.log(appleCount)
 let bananaCount =0

for(const element of fruits){
    // console.log(element)
    if(element ==="banana"){
        bananaCount = bananaCount +1
    }
}
// console.log(bananaCount)

let orangeCount = 0
for(const element of fruits){
    if(element === "orange")
    orangeCount = orangeCount +1
}
// console.log(orangeCount)






    





