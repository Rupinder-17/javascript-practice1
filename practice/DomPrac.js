// create element



const ulTag = document.querySelector("ul")
console.log(ulTag)
const liTag = document.createElement("li")
console.log(liTag)
liTag.innerText = "list7"
ulTag.appendChild(liTag)
liTag.style.color = "red"
ulTag.style.color = "blue"

const listtag = document.querySelectorAll("li")
console.log(listtag)
listtag[3].style.color = "green"

const imageTag = document.querySelector("img")
imageTag.setAttribute("src", "https://demo2.themelexus.com/delicioz/wp-content/uploads/2022/07/product-4-1-460x460.jpg")
console.log(imageTag)
imageTag.setAttribute("width", "180px")
imageTag.setAttribute("height", "200px")
// imageTag.setAttribute("border", "12px")
imageTag.style.border = "5px solid red"
imageTag.style.padding = "5px"


const del1 = document.querySelectorAll("li")
console.log("delete list", del1)
del1[0].remove()
const remaininglist = document.querySelectorAll("li")
console.log(remaininglist)