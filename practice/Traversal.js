let parent = document.getElementById("parent")
console.log(parent)

console.log(parent.childNodes)
console.log(parent.firstElementChild)

const child1 = document.getElementById("child1")
console.log(child1)
console.log( "first child...",child1.firstElementChild)
console.log(child1.nextElementSibling)


console.log(parent.lastElementChild)
// last child means h1  tag
console.log(parent.lastChild)        
// to acess last grandchild of parent?

const child2 = document.getElementById("child2")
console.log("second child....",child2)

console.log("previous",child2.previousSibling)
console.log("prev", child2.previousElementSibling)


const grand = document.getElementById("grandchild2")

// ul is the first grand child or li ?

console.log("firstgrandchild", grand.firstChild)
console.log( "grandchild",grand.firstElementChild)

const grand1 = document.getElementById("grandchild")
console.log("sibling", grand1.nextSibling);



const list = document.getElementById("list")
console.log(list.children)
console.log("firstchild",list.firstChild)
// list.firstChild.textContent= "two"

console.log( "lastchild",list.lastChild)

list.lastElementChild.innerText +=  " new one"
list.style.fontSize = '28px'
console.log(list)

// create new li

const liTag1 = document.createElement("li")
liTag1.innerText = "list4"
liTag1.style.fontSize = "27px"
liTag1.setAttribute("class", "four")
list.append(liTag1)


// why not with class?

// const class4 = document.querySelector(".four")
// class4.style.color = "purple"


// for(index =0; index< list.children.length; index++){
//     // const list = document.getElementById("list")
//     list.children[index].setAttribute("class","class"+ index)
//     // list.children[0].setAttribute("class","one")
//     // list.children[index].setAttribute("class","two")
//     // list.children[2].setAttribute("class","three")

// }
console.log(list.children)

// why not  change their color with getclassname

const cls = document.querySelector(".three")
// cls.style.color = "blue"
// cls.innerHTML = "list updated"

const class4 = document.getElementsByClassName("four")
console.log(class4)
class4[0].style.color = "red"