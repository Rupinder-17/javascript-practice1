import axios from "axios"

const getuser =()=>{
    const userlist =axios
    .get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>console.log(res.data))
}
getuser()

// const id =()=>{
//     const userId =axios
//     .get("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>console.log(res.data))
// }
// id()

// const myFiles =()=>{
//     const Files = axios
//     .get("https://jsonplaceholder.typicode.com/comments")
//     .then((res)=>console.log(res.data))
// }
// myFiles()



// const asyncFunc = ()=>{
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log("data1")
//             resolve("success")
//         })
//     },8000)
    
// }
// console.log("fetching data......")
// let p1 = asyncFunc();
// p1.then((res)=>{
//     console.log(res)
// })

// }
console.log(fr)
let fruit4 =["apple","banana","grapes","mango"]
for(let fr in fruit4){
//     console.log(fr)let fruit =["apple","banana","grapes","mango"]
// console.log(fruit.length)
// let a= []
// for(let i=0; i<fruit.length; i++){
// // console.log(fruit[i])
//  a.push(fruit[i].toUpperCase())
// }
// console.log(a)

// const pi = 3.14;
// console.log(pi)

// const arr= ["apple", "banana"]
// // arr.push("mango")
// arr.pop("banana")
// console.log(arr)
// let fruit3 =["apple","banana","grapes","mango"]
// let i=0;
// let fr=[]
// while(i<fruit3.length){
//     fr.push(fruit3[i].toUpperCase())
//     i++
}

 let user =['simran: 123456', 'amrit: 5768','yuvraj: 3454']

 
let arrydata = user?.map(e=>({username:e.split(":")[0], password:e.split(":")[1]}))
//  let a=user?.map(e=>{
//     [username ,password]=e.split(":")
//     return{username,password}
// })
 console.log(arrydata)