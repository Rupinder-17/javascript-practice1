 const students =[
    {
      "student_id": "123456",
      "name": "John Doe",
      "age": 20,
      "courses": [
        {
          "course_id": "CSCI101",
          "course_name": "Introduction to Computer Science",
          "credits": 3,
          "grades": [
            {
              "semester": "Spring 2023",
              "grade": "A"
            },
            {
              "semester": "Fall 2023",
              "grade": "B+"
            }
          ]
        },
        {
          "course_id": "MATH201",
          "course_name": "Calculus I",
          "credits": 4,
          "grades": [
            {
              "semester": "Spring 2023",
              "grade": "A-"
            },
            {
              "semester": "Fall 2023",
              "grade": "A"
            }
          ]
        }
      ],
      "address": {
        "street": "123 Main St",
        "city": "Anytown",
        "state": "CA",
        "zipcode": "12345"
      },
      "contact_info": {
        "email": "john.doe@example.com",
        "phone": "123-456-7890"
      }
    },
    {
      "student_id": "789012",
      "name": "Jane Smith",
      "age": 22,
      "courses": [
        {
          "course_id": "ENG101",
          "course_name": "English Composition",
          "credits": 3,
          "grades": [
            {
              "semester": "Spring 2023",
              "grade": "A-"
            },
            {
              "semester": "Fall 2023",
              "grade": "A"
            }
          ]
        },
        {
          "course_id": "HIST201",
          "course_name": "World History",
          "credits": 4,
          "grades": [
            {
              "semester": "Spring 2023",
              "grade": "B+"
            },
            {
              "semester": "Fall 2023",
              "grade": "A-"
            }
          ]
        }
      ],
      "address": {
        "street": "456 Oak St",
        "city": "Othertown",
        "state": "NY",
        "zipcode": "54321"
      },
      "contact_info": {
        "email": "jane.smith@example.com",
        "phone": "987-654-3210"
          }
    }
    
    ]

    for(const element of students){
      console.log(`${element.name} ,${element.age} , ${element.student_id} `)
      for(const Course of element.courses){
        // console.log(Course)
        console.log(`Course : ${Course.course_name} `)
        for(const grade of Course.grades){
          console.log(`${grade.semester} , Grade:${grade.grade}`)
        }
      }
      for(const address in element.address){
        console.log(`${address} : ${element.address[address]}`)
      }
      for(const  contact_info in element.contact_info ){
        console.log(`${contact_info} : ${element.contact_info[contact_info]}`)
      }
     
      }

    

    // console.log(students[0].name.courses[0])
  // console.log(students)
// let student = students[0].name
// console.log(student)
//  console.log(students[0].courses[0].course_name)
// console.log(students[0].courses[0].grades[0].semester)
// console.log(students[0].courses[0].grades[0].grade)
// console.log(students[0].contact_info.email)
// John Doe, Introduction to Computer Science, Spring 2023, Grade : A, john.doe@example.com 

// Jane Smith, Introduction to Computer Science, Spring 2023, Course ID : MATH201,  john.doe@example.com
//