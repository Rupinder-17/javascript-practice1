// finding duplicate elements in an array and counting occurrences of elements in an array
// for example --
let fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'orange'];
let appleCount = 0
for (let index = 0; index < fruits.length; index++) {
    if (fruits[index] == "apple") {
        appleCount = appleCount + 1
    }
    console.log(fruits[index])
}
console.log(appleCount)
let BananaCount = 0
for (let index = 0; index < fruits.length; index++) {
    if (fruits[index] === "banana") {
        BananaCount = BananaCount + 1
    }
}
console.log(BananaCount)
let orangeCount = 0
for (let index = 0; index < fruits.length; index++) {
    if (fruits[index] === "orange") {
        orangeCount = orangeCount + 1
    }
}
console.log(orangeCount)

let Arr1 = [...new Set(fruits)]
console.log(Arr1)

const result = Arr1.map((item) => {
    return {
        fruits: item,
        count: fruits.filter((elm) => elm === item).length
    }
})
console.log(result)

//  capitalizing the first letter of each element in an array without using built-in functions

let fruitArr = ['apple', 'banana', 'orange', 'kiwi']
const capitalizeletter = []
for (let i = 0; i < fruitArr.length; i++) {

    let element = fruitArr[i]
    let firstChar = element[0]
    let remaingString = fruitArr[i].slice(1)
    let capitalize = firstChar.toUpperCase() + remaingString
    capitalizeletter.push(capitalize)
}
console.log(capitalizeletter)

// Expected Output ['Apple', 'Banana', 'Orange', 'Kiwi']
//  6*1=6
let num = 6;
for (let index = 1; index <= 10; index++) {
    let answere = index * num
    console.log(`${num} *${index} = ${answere}`)
}

// let numb = [4,7 ,8 ,10, 23,67,90,22,56,87,16 ]
// for (let i= 0; i<=numb.length; i++){
//     let a= []

//     if(numb % 2===0 && numb % 8===0){
//         a.push(numb)
//         console.log(a)
//     }
// }

function reversestr(str) {
    let reverse = " ";
    for (let i = str.length; i >= 0; i--) {
        reverse += str[i]
    }
    return reverse
}
console.log(reversestr("hello"))

// let numbers = [5, 1, 9, 2, 7]
// let minimum = numbers[0]
// for (var index = 1; index < numbers.length; index++) {
//     if (numbers[index] < minimum) {
//         minimum = numbers[index]
//     }
// }
// // console.log(minimum)

let arry = [1, 2, 3, 4]
let arr2 = []
for (let index = arry.length-1; index >= 0; index--) {
    arr2.push(arry[index])
}
console.log(arr2)


let evenNumber = [2, 4, 6, 5, 8, 7, 9, 7, 3]
let filterEvenNumb = []
for (let index = 0; index <= evenNumber.length; index++) {
    // filterEvenNumb = evenNumber[index]
    if (evenNumber[index] % 2 == 0) {
        filterEvenNumb.push(evenNumber[index])
    }
}
console.log(filterEvenNumb)

let numbs = [3, 5, 6, 7, 5, 8, 11]
function findMinMax(arr) {
    let minimum = arr[0];
    let maximum = arr[0];
    for (let index = 1; index <= arr.length; index++) {
        if (arr[index] < minimum) {
            minimum = arr[index]
        }

    }
        for (let index = 1; index <= arr.length; index++) {
            if (arr[index] > maximum) {
                maximum = arr[index]
            }
        }
        return {minimum, maximum}
}
console.log(findMinMax(numbs))