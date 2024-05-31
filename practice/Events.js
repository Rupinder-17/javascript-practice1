const statusElement = document.getElementById("status")
const addFriendElement = document.getElementById("addFriendBtn")
const removeFriendElement = document.getElementById("removeFriendBtn")

//     statusElement.innerText = "Friend"
//     // statusElement.style.color = "green"
//     statusElement.classList.remove("unFriend")
//     statusElement.classList.add("friend")
// })

addFriendElement.addEventListener("click", addFriend )
removeFriendElement.addEventListener("click", removeFriend)

function removeFriend(){
    statusElement.innerText = "Unknown"
    statusElement.style.color = "red"
    statusElement.classList.remove("friend")
    statusElement.classList.add("unFriend")
    // statusElement.style.opacity = 1
    // statusElement.style.scale = 2
    
}
function addFriend(){
    statusElement.innerText = "Friend"
    statusElement.style.color = "green"
    statusElement.classList.remove("unFriend")
    statusElement.classList.add("friend")

}


