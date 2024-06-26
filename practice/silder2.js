let imageArray = [
    {
        img1: "https://img.freepik.com/free-photo/natures-beauty-captured-colorful-flower-close-up-generative-ai_188544-8593.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1717718400&semt=sph",
        alt: "flower"
    },
    {
        img1: "https://hips.hearstapps.com/hmg-prod/images/hummingbird-feeding-at-bleeding-heart-bloom-royalty-free-image-1656108706.jpg?crop=0.536xw:1.00xh;0.116xw,0&resize=980:*",
        alt: "Bird"
    },
    {
        img1: "https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg",
        alt: "Blue flower"
    },
    {
        img1: "https://i.pinimg.com/736x/0e/89/37/0e8937e6a2aa4d547fc62d5aa218d1dd.jpg",
        alt: "mix flower"
    }
]

// traget elements
const imageItems = document.querySelector("img")
console.log(imageItems)
const indicatorContainer = document.querySelector(".indicaterss")
console.log(indicatorContainer)
const leftArrow = document.querySelector(".left")
console.log(leftArrow)
const rightArrow = document.querySelector(".right")
console.log(rightArrow)

let CurrrentIndex = 0

for (let index = 0; index < imageArray.length; index++) {
    const indicators = document.createElement("div")
    indicators.classList.add("indicater");
    indicators.setAttribute("data-index", index)
    indicatorContainer.appendChild(indicators)
}
const indicaters = document.querySelectorAll(".indicater")

function displayImage(index) {
    imageItems.src = imageArray[index].img1
    imageItems.alt = imageArray[index].alt;

    indicaters.forEach(indi => indi.classList.remove("active"))
    indicaters[index].classList.add("active")

}


indicaters.forEach(indicater => {
    indicater.addEventListener("click", () => {
        const index = parseInt(indicater.getAttribute("data-index"))
        CurrrentIndex = index;
        displayImage(CurrrentIndex)
    });
});

// displayImage(CurrrentIndex)

rightArrow.addEventListener("click", () => {
    CurrrentIndex++;
    if (CurrrentIndex >= imageArray.length) {
        CurrrentIndex = 0
    }
    displayImage(CurrrentIndex)
});

leftArrow.addEventListener("click", () => {
    CurrrentIndex--;
    if (CurrrentIndex == -1) {
        CurrrentIndex = imageArray.length - 1
    }
    displayImage(CurrrentIndex)
});

setInterval(() => {
    CurrrentIndex++
    if (CurrrentIndex >= imageArray.length) {
        CurrrentIndex = 0
    }
    displayImage(CurrrentIndex)
}, 1000)
