
const imageArray = [{ img: "/images/smith.jpg", name: "Hennery" },
{ img: "https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-nature-mountain-scenery-with-flowers-free-photo.jpg?w=600&quality=80", name: "Gardan" },
{ img: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", name: "Lake" },
{ img: "https://img.freepik.com/free-photo/beautiful-countryside-road-greenery-forests_181624-5399.jpg?t=st=1717410241~exp=1717413841~hmac=47e10aadb71dd4c90e42378c6f9a7f89084b0e66383f999b7c0f1da0ef26cdf3&w=360", name: "Road" },
{ img: "https://img.freepik.com/free-photo/beautiful-scenery-pathway-forest-with-trees-covered-with-frost_181624-42376.jpg?t=st=1717410608~exp=1717414208~hmac=235f6da137154bb20422f40c349047f93d6674208f38cf800f31602e1f57e10a&w=996", name: "Forest" }
]

console.log(imageArray)

const imageTag = document.getElementById("img")
// console.log(imageTag);
const nextArrow = document.getElementById("next")
// console.log(nextArrow)
const prevArrow = document.getElementById("prev")

const name1 = document.getElementById("name")
const listItem = document.getElementById("list")

// imageTag.setAttribute("src", imageArray[0].img)
// name1.textContent = imageArray[0].name
let newImage = 0

let indicator = 0
    // for (let index = 0; index < imageArray.length; index++) {
    //     const litag1 = document.createElement("div")
    //     listItem.appendChild(litag1)
    //     litag1.setAttribute("class", "list2")
    //     indicator = listItem.children
    //     console.log(indicator)
    //     if (newImage == index) {
    //         indicator[index].style.opacity = 1
    //     }
    //     else {
    //         indicator[index].style.opacity = 0.3
    //     }
    // }

function nextImage() {
    let card = imageArray[newImage]
    console.log(card);
    imageTag.src = card.img
    name1.textContent = card.name
    name1.style.color = "purple"
    newImage++
    if (newImage == imageArray.length) {
        newImage = 0
    }
    let indicatorItem = '';
    for (let itemIndex in imageArray) {
        if (itemIndex == newImage) {
            indicatorItem += '<div class="list2" style="opacity:1"></div>'
        } else {
            indicatorItem += '<div class="list2"></div>'
        }
    }
    // console.log(indicatorItem);
    listItem.innerHTML = indicatorItem;
}
const interval = setInterval(function () {
    // method to be executed;
    // nextImage()
    // console.log(interval)
}, 1000);
nextArrow.addEventListener("click", nextImage)
prevArrow.addEventListener("click", function () {
    let card1 = imageArray[newImage]
    console.log(card1)
    imageTag.src = card1.img
    newImage--
    if (newImage == -1) {
        newImage = imageArray.length - 1
    }
    let indicatorItem1 = '';
    for (let itemIndex in imageArray) {
        if (itemIndex == newImage) {
            indicatorItem1 += '<div class="list2" style="opacity:1"></div>'
        } else {
            indicatorItem1 += '<div class="list2"></div>'
        }
    }
    console.log(indicatorItem1);
    listItem.innerHTML = indicatorItem1;
}
)

























