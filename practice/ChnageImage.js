const btnClick = document.getElementById("btn")
btnClick.addEventListener("click", ChangeImage)

function ChangeImage() {
    const displayImage = document.getElementById("imageChnge")
    console.log(displayImage)
    displayImage.setAttribute("width", "400px")
    displayImage.setAttribute("src", "/images/smith.jpg")
}