//Different object creation format
//1. Object literal
//object is the person and we can give the properties inside and we can create method
//name below -key
const person={
    name:"Kevin",
    age:20,
    greet(){
        console.log("Hello")
    }
}
console.log(person.name,person.age)
person.greet()

//new object constructor
const student =new Object()
student.name="Mrudula"
student.age="27"
console.log(student)


//Json object -JS object notation object-- important in playwright
//key also need to be in double quotes
//we cant use methods
const employee={
    "name":"Malu",
    "age":25
}
console.log(employee)



