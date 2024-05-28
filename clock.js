const endDate= "23 march 2024 11: 34 : 00 am "
document.getElementById("end-date").innerHTML=endDate
const inputs= document.querySelectorAll("input")

const clock=()=>{
    const end = new Date(endDate)
    const now= new Date()
    console.log(now)
    console.log(end)
    const diff=(now-end)/1000
    if(diff<0 )return
    console.log( diff)
    console.log(Math.floor(diff/3600/24))
    inputs[0].value=Math.floor(diff/3600/24)
   inputs[1].value= Math.floor(diff/3600)%60
   inputs[2].value=Math.floor(diff/60)%60
   inputs[3].value=Math.floor(diff)%60

}
// clock()
// 1 day =24hr
// 1 hr = 60 mint
// 60mint =3600sec
setInterval(() => {
    clock()
}, 1000);