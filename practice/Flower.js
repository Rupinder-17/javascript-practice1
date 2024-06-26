
const flowerArray = [
    {img:"https://c0.wallpaperflare.com/preview/600/433/179/red-rose-in-snow-love-symbol-lost-love-railway.jpg",name:"Red Rose", Description:"Snow-White and Rose-Red are two little girls living with their mother, a poor widow, in a small cottage by the woods. Snow-White is quiet and shy and prefers to spend her time indoors, doing housework and reading. Rose-Red is outspoken, lively and cheerful, and prefers to be outside. They are both very good girls ."},
    {img:"https://t4.ftcdn.net/jpg/01/30/65/23/360_F_130652317_Jhf43ySw9tf25CpElLw6i0sNeTsH3DUC.jpg", name:"Yellow Rose",  Description:"Yellow roses are universally known as symbols of friendship, most people give them to each other for their birthdays or to celebrate the love between two good friends. Roses symbolise everything from “I love you” to “I care for our friendship” and colours vary from romantic red to energetic orange."},
    {
        img:"https://img.freepik.com/free-photo/vibrant-yellow-daisy-wet-fragile-with-raindrop-generated-by-ai_188544-10300.jpg",
        name:"Pink Flower",
        Description: "Pink roses typically symbolise admiration, happiness, and love. More subtle than the traditional bold red rose, pink roses are often used to signify a strong friendship or the love between family members. Pink roses can also represent admiration and respect towards someone close to you."
    }
]
console.log(flowerArray)

function redrose(){
    let red = flowerArray.filter(item=> item.name ==="Red Rose")
    displayimg(red)
}
const yellow = document.getElementById("yellowRose")
yellow.addEventListener("click",function(){
    let yellowbtn = flowerArray.filter(item=> item.name==="Yellow Rose")
    displayimg(yellowbtn)
})
function pinkrose(){
    let pink = flowerArray.filter(elm => elm.name==="Pink Flower")
    displayimg(pink)
}
const holder = document.querySelector(".main2")

function displayimg(elm){
    elm.forEach(element => {
        holder.innerHTML = `<div>
        <h1> ${element.name}</h1>
        <p> ${element.Description}</p>
        </div>
         <img src="${element.img}" alt="">
        `
        
    });

}
// displayimg(flowerArray)






// // const headingName = document.getElementById("heading")
// // const paragraph = document.getElementById("description")
// const yellowbtn = document.getElementById("yellowRose")
// // let clickImage = 0
// // headingName.innerText = flowerArray[0].name
// function ShowFlower(arr){
//     const imageTag = document.getElementById("img")
//     console.log("hello",imageTag)

//     let mainDiv = document.querySelector(".subMain")
//     console.log("main",mainDiv)
//     arr.forEach(element => {
        
//         imageTag.src = element[index].img
//         console.log("ele",element)
//         const heading = document.createElement("h1")
//         heading.innerText = element.name
//         heading.classList.add("head")
//         const para = document.createElement("p")
//         para.innerText = element.Description
//         para.classList.add("para")
//         mainDiv.appendChild(heading)
//         mainDiv.appendChild(para)
//         console.log("bbbbb",mainDiv)
//     });
//     }
// ShowFlower(flowerArray)



// redBtn.addEventListener("click",function(){
//      let red =flowerArray.filter(elm =>elm.name==="Yellow Rose")

//     ShowFlower(red)
// })
// yellowbtn.addEventListener("click", function(){
//     if(clickImage =="Yellow Rose"){
//         clickImage = 0
        
//     }
//     ShowFlower()
// })
