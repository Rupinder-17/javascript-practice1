import axios from "axios";
const getdata =()=>{
    const dateList =axios
    .get("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>console.log(res.data))
    console.log(dateList)
};
getdata()