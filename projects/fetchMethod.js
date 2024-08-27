// import axios from "axios";

// const getUser = ()=>{
//      axios.get("https://jsonplaceholder.typicode.com/posts")
//     .then((res)=>{
//         console.log(res.data);
        
//     })
// }
// getUser()

function trianglePattren(rows){
    for(let i= 0; i<=rows; i++){
        let pattren = ""
        for(let j=0; j<=i; j++){
            pattren +="*"
        }
        // console.log(pattren);
    }
}
trianglePattren(10)

function tri(height){

    for(let i = 1; i<= height; i++){
        let space = " ".repeat(height -i)
        // console.log(space);
        let stars = "*".repeat(2 * i - 1)
        // console.log(stars)
        console.log(space + stars);
    }
}
tri(5)

function createIsoscelesTriangle(height) {
  for (let i = 1; i <= height; i++) {
    // Calculate spaces before the stars
    let spaces = " ".repeat(height - i);

    // Calculate stars for this row
    
    let stars = "*".repeat(2 * i - 1);
    // Combine spaces and stars
    console.log(spaces + stars);
  }
}

// Example usage
createIsoscelesTriangle(5);

function tri(height) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = 1; j <= height - i; j++) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

tri(5);
