let total = 0
let i = 0
while (i <= 10) {
    total = total + i
    i++;
    // console.log("total")
}
let n = 10
let total1 = (n * (n + 1) / 2)
console.log(total1)
let total2 = 0;
let num = 20
for (let i = 0; i <= num; i++) {
    if(i===4){
        // break
        continue;
    }
    total2 = total2 + i
}
console.log(total2)
console.log("hi")

// do while loop//
let a=10
do{
    console.log(a);
    i++;

}while(i<=9){
    console.log( "value of i is ",i)
}