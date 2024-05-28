const elementsArray = [

    { color: 'red', classname: 'class1' },
    { color: 'blue', classname: 'class2' },
    { color: 'green', classname: 'class3' },
    { color: 'orange', classname: 'class4' },
    { color: 'purple', classname: 'class5' },
    { color: 'yellow', classname: 'class6' }

];

for (let index = 0; index < elementsArray.length; index++) {
    const element = elementsArray[index]
    const check = document.getElementsByClassName(element.classname)
    // const check = document.querySelectorAll("." + element.classname)
    console.log(check)
    check[0].style.color = element.color
}

const heding1 = document.querySelector("#head")

// console.log(heding1)

heding1.removeAttribute("id")

const tagname = document.getElementsByTagName("h1")
// console.log(tagname)

const alltag = document.querySelectorAll("h1")

// console.log(alltag)

const tagall = document.querySelector("h4")

tagall.innerText = "heading44"

tagall.setAttribute("class", "class4")

// console.log(tagall)

// // console.log(element)
// console.dir(document)
document.title = "js class"

const heading1 = document.getElementsByClassName("class1")

heading1[0].style.color = "red"