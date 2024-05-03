const findarr = [23, 34, 656, 88, 33, 56, 77, 88, 5, 46, 5, 3]
const arr1 = findarr.filter((elm) => elm < 5)
const b = findarr.find((value) => value >= 88)
// console.log(arr1)
console.log(b)

const api = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
    },
    {
        "userId": 1,
        "id": 6,
        "title": "qui ullam ratione quibusdam voluptatem quia omnis",
        "completed": false
    },
    {
        "userId": 1,
        "id": 7,
        "title": "illo expedita consequatur quia in",
        "completed": false
    },
    {
        "userId": 1,
        "id": 8,
        "title": "quo adipisci enim quam ut ab",
        "completed": true
    },
    {
        "userId": 1,
        "id": 9,
        "title": "molestiae perspiciatis ipsa",
        "completed": false
    },
    {
        "userId": 1,
        "id": 10,
        "title": "illo est ratione doloremque quia maiores aut",
        "completed": true
    },
    {
        "userId": 1,
        "id": 11,
        "title": "vero rerum temporibus dolor",
        "completed": true
    },
    {
        "userId": 1,
        "id": 12,
        "title": "ipsa repellendus fugit nisi",
        "completed": true
    },
    {
        "userId": 1,
        "id": 13,
        "title": "et doloremque nulla",
        "completed": false
    }
]
const findapi = api.filter((element, id) => element.completed === true && element.title.includes("repellendus") && element.id <= 6)
const c =api.find((value)=>value.completed===true)
// console.log(c)
// console.log(findapi)

for(let i=0; i<=10;i++){

    // console.log(i)

}

// print odd number
for(let i=1; i<=20; i+=2){
    console.log(i)

}
// 7*1=7
for(let i=1;i<=10;i++){
    let table= " 12 * " +i+ "=" + 12*i
    console.log(table)
}
// print all table
function printtable(n){
    for(let i=1; i<=10; i++){
        let row= n+"*" +i+"="+ n*i
        console.log(row)
    }
}
printtable(8)

let sum = 2

for(let i=1; i<=10; i++){
     sum -= i;
    // console.log(sum)
}
let sum1 =0
for(let i=11; i<=15; i++){
    sum1 += i
    // console.log(sum1)

}
function Degree(n){
    let a= n * 1.8 +32
    // console.log(a)
}
Degree(20)


let arr=[1,6,8,1,1,-2]
function printarr(arr){
    let sumofarr=0
    for(let i=0; i < arr.length; i++){
        sumofarr += arr[i]
        console.log(sumofarr)
    }
}
// let sumofarr= printarr(arr)
printarr(arr)

function average(arr2){
    let sum2=0
    for(let i=0; i<arr2.length;i++){
        sum2 += arr2[i]
        // sum2 =arr2/2
        // console.log(sum2)
    }
}
let arr2 =[2,5,7,8,9,2]
let sum2= average(arr2)


let number=[0,4,8,7,-4,-9,]

function positive(number){
    let arry=[]
    for(let i=0; i<=number.length; i++){

        let el = number[i]
        if(el>=0){
            arry.push(el)
        }
    }
    // console.log(arry)
}
 let arry=positive(number)

 let d= [20,-98,187,54,0,-1,-1.2]
 const arryfind= ()=>{
    let p=d.filter((e)=>e<0)
    console.log(p)
}
 arryfind()

 function maxNumber(d){
    let max= d[0]
    for(let i=0;i<d.length;i++){
        if(d[i]> max){
            max=d[i]
        }
    }
    console.log("max",max)
 }
let max= maxNumber(d)




