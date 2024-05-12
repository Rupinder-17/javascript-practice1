let students = ["Rupinder", "Aman", "Harsimran"]

// expresion one
for (let index = 0; index < students.length; index++) {
    const element = students[index]
    // console.log(element)
}
// expression two

let index = 1;
for (; index < students.length; index++) {
    // console.log(index,students[index])
}


// expression three

for (let index = 0; ; index++) {
    if (index < 2) {
        // console.log(students[index])
        break;
    }
}
// experssion 4
for (let index = 0; index < students.length;) {
    if (index == 2) {
        break;
    }
    console.log(students[index])
    index++;
}

let numb = [45, 76, 89, 3, 6]
let sum = 0
for (let i = 0; i < numb.length; i++) {
    sum += numb[i]
}
console.log(sum)




for (let ind = 0; ind < 5; ind++) {
    console.log(ind)
}
console.log("value of ind", ind)
let arr =[ 1,2,3,4]
let arr1 =[]
for(let i= 0; i<arr.length;i++){
    let b = arr.push().arr1*4
    console.log(b)

}

