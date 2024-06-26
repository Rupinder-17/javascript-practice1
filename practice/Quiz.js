const questions = [
    {
        question: "What is the capital of France? 🇫🇷",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet? 🪐",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
    },
    {
        question: "What is the largest ocean on Earth? 🌊",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific",
    },
    {
        question: "Which country is famous for sushi? 🍣",
        options: ["China", "Japan", "Korea", "Thailand"],
        answer: "Japan",
    },
    {
        question: "What is the boiling point of water? 💧",
        options: ["90°C", "100°C", "110°C", "120°C"],
        answer: "100°C",
    },
];
console.log(questions)

let questionString = JSON.stringify(questions)
// let questionString = JSON.stringify(questions[0])
console.log(questionString)

let newJason = JSON.parse(questionString)
console.log(newJason)


localStorage.setItem("questions" , questionString )
localStorage.setItem("name", "rupinder")
 let  Getitem = localStorage.getItem("names")
 console.log("getData",Getitem)
 localStorage.clear()
 
//  localStorage.removeItem("questions")
let questionindex = 0
let score = 0
const mainDiv = document.querySelector(".main")
const  IncorrectAnswer = "bg-red-400"
const  correctAnswer = "bg-green-400"

const questionContainerElement = document.getElementById("questioncontainer")
const startBtn = document.getElementById("btn")

const scoreData = document.getElementById("scoreContainer")
const btn = document.createElement("button")
const container = document.getElementById("container")

function dataShow(index) {
    
    mainDiv.innerHTML = ""


    scoreData.appendChild(btn)
    console.log("data", scoreData)
    const scoreText = document.getElementById("score")
    const emojiText = document.getElementById("emoji")

    if (index >= questions.length) {
        questionContainerElement.classList.add("hidden")

        scoreText.innerText = `Quiz compeleted  score:${score} /${questions.length}`
        if (score > 3) {
            emojiText.innerText = "🥳"
        }
        else {
            emojiText.innerText = "😒"
        }
        scoreData.classList.remove("hidden")

        container.classList.remove("bg-red-400", " bg-blue-100")
        container.classList.remove("bg-green-400", " bg-blue-100")
        container.classList.add("bg-gray-200")
        // mainDiv.classList.remove("main") 
    }
    
    let currentquestion = questions[index]
    console.log("ccccc", currentquestion)
    questionContainerElement.innerHTML = `
    <h2 class ="text-xl font-semibold" >${currentquestion.question}</h2>
    <div id="options-container" class="flex flex-col space-y-2" > ${currentquestion.options.map((element , index)=>`
        <button class="listItem py-2 px-4 bg-gray-200 text-black rounded hover:bg-gray-300 data-option=${element}">${element}</button>
        `).join("")}</div>
    `


    // answer.forEach(element => {
    // const heading = document.createElement("h1")
    // // heading.classList.add("head")
    // heading.style.fontSize = "23px"

    // heading.innerText = currentquestion.question
    // mainDiv.appendChild(heading)
    // const ulList = document.createElement("div")
    // ulList.classList.add("ullistt")

    // currentquestion.options.forEach(item => {
    //     console.log("mmmm", item)

    //     const litag = document.createElement("button")
    //     litag.classList.add("listItem")
    //     litag.style.listStyle = "none"
    //     litag.innerText = item
    //     ulList.appendChild(litag)
    // })
    // mainDiv.appendChild(ulList)

    console.log("ggggg", mainDiv)
    const listItems = document.querySelectorAll(".listItem")
    console.log("list", listItems)


    listItems.forEach((item) => {
        console.log("hhh", item)
        item.addEventListener("click", function () {
            console.log("hello")
            if (item.innerText === currentquestion.answer) {
                console.log("answer is correct")
                score++
                container.classList.remove("bg-blue-100")
                container.classList.add(correctAnswer)
                container.classList.remove(IncorrectAnswer)
            } else {
                console.log("incorrect")
                container.classList.remove(correctAnswer)
                container.classList.add(IncorrectAnswer)
            }
            dataShow(index + 1)
            setTimeout(function () {
                container.classList.remove("bg-green-400")
                container.classList.remove("bg-red-400")
                container.classList.add("bg-blue-100")
            }, 1000)
        })
    })
}
dataShow(questionindex)
startBtn.addEventListener("click", function () {
    questionContainerElement.classList.remove("hidden")
    scoreData.classList.add("hidden")
    score = 0
    container.classList.remove("bg-green-400")
    container.classList.remove("bg-red-400")
    container.classList.add("bg-blue-100")
    dataShow(0)
})
