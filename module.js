
const getPromise = ()=>{
    return new Promise((resolve, reject) => {

    console.log(" i am promise")
    // resolve("success")
    reject("here is error")
})}
let promise = getPromise();
promise.then((res)=>{
    console.log("promise is full fill", res)

 })
 promise.catch((err)=>{
    console.log("error here",err)
 })

function  getData (dataId, getNextData){
    return new Promise((resolve, reject) => {
        
        // console.log("data", dataId)
        setTimeout(()=> {
            console.log("data", dataId);
            if(getNextData){
                
                getNextData();
            }
            
        },2000)
    })
    }
    getData(1,()=>{
        console.log("getting data2...")
        getData(2, ()=>{
            console.log("getting data3...")
            getData(3, ()=>{
                console.log("getting data4...")
                getData(4)
            })

        })
    })
// let key="email"
// let obj={
//     name:"rupinder",
//     job:"softwere engineer",
//     sallary:"100000",
//     age: 30,
//     "person hobby": ["music","guitar","sleeping","reading"]
// }
// // console.log(obj["person hobby"])
// // obj[key]= "rupinder@gmail.com"
// // console.log(obj)
// // for(let key in obj){
// //     console.log(`${key} : ${obj[key]}`)
// // }
//     console.log(Object.keys)(obj)

// computed properties

const key1 ="objkey1"
const  key2= "objkey2"

const value = "myvlue1"
const value2= "myvalue2"
const obj ={
    [key1] : value,
    [key2] : value2,
}
console.log(obj)
