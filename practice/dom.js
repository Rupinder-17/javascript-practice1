const Array1 = [
    { color: "purple", classname: "classone" },
    { color: "red", classname: "classtwo" },
    { color: "pink", classname: "classthree" }
]

for (const element of Array1) {

    // let chngecolor = document.getElementsByClassName(element.classname)
    // let chngecolor = document.querySelector("." + element.classname)
    let chngecolor = document.querySelectorAll("." + element.classname)
    // let chngecolor = document.getElementsByTagName("h1")
    // why first one chnge their color 
    console.log(chngecolor)
    chngecolor[0].style.color = element.color
}
const adding = document.querySelector("h2")
adding.innerText = "this is second tag"
adding.style.color = "blue"
adding.style.background = "pink"
console.log(adding)

adding.setAttribute("class", "class1")

const delete1 = document.querySelector(".three")
delete1.removeAttribute("class")
console.log( "delete.........",delete1)


const list1 = document.createElement("li")
const adding1 = document.querySelector("ul")
list1.innerText = "list7"
adding1.appendChild(list1)

const del = document.querySelectorAll("li")
del[2].remove();
const delet = document.querySelectorAll("li")
console.log(delet)