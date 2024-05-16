let numb = [56,89,4,6]
let sum = 0
for(let i = 0; i<numb.length; i++){
    // if(numb[i]=1){
        sum += numb[i]
    // }
}
console.log(sum)

let arr1 = ["kiran","raman","preet", "haram"]

for(let i = 0; i<arr1.length ; i++){

    console.log(arr1[i])
}

 const student = {
    "personlinfo":{
        "id": {
            "idNumber": "12345",
            "Name": "john"
        },
        "DemoGraphics": {
            "Age": 23,
            "Gender": "Male",
            "Nationality": "indian",
        },
    },
    "academicinfo":{
        "Enrollment": {
            "partTime": "3 Hour",
            "fullTime": "9 Hour"
        },
        "currentcourses": [
            {
            "course1":"",
            },
            {
            "course2":"",
            },
            {
            "course3":""
            }
        ]
    },
    "extraactivities":{
        "club": {
            "club1": "hhhh",
            "club2": "mmmmmm",
        },
        "sports": {
            "sport1": "football",
            "sport2": "hockey",
        },
        "volunteering": {
            "event1": "One",
            "event": "two",
        }
    },
    "contectinfo": {
        "phonenumber": "456677",
        "email": "john@gmail.com",
        "address": {
            "street": "left-street",
            "city":"bombay",
            "zipcode": "23456"
        }
    }
}
console.log(student)
console.log(`${student.extraactivities.club.club1} , ${student.academicinfo.currentcourses[2]} ,
 ${student.extraactivities.volunteering.event1} ,${student.contectinfo.phonenumber},
  ${student.contectinfo.address.city} ,${student.contectinfo.phonenumber} ,${student.academicinfo.Enrollment.partTime}`)