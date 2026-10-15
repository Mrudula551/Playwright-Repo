//block of code is called function
//similar to method in another languages but function is standalone
//to execute the function we need to call/invoke function

//NON PARAMETERISED
function greet(){
    console.log("Welcome to javascript learning")
}
greet()//invoking

//Parameterised function--Giving parameter to the function and while calling value has to provide
function enter(name1){
    console.log("Welcome to javascript learning "+name1)
}
enter("Mrudula")
//ASSIGNMENT-Addition of two numbers using parameterised function
function addition(a,b){
    //console.log(a+b)
    //let sum=a+b
    console.log("The sum of two number is",(a+b))
}
addition(10,20)

//Function using return type
function division(a,b){
    return a/b
}
//console.log(division(10,2))
console.log("The division of two number is",(division(10,2)))
//let results=division(2,5)
//console.log(results)


//Arrow function--Shorter syntax for function
//non parameterised example
const name =()=>{
    console.log("Mrudula")
}
name()
//parameterised
const sub=(a,b)=>{
    console.log(a-b)
}
sub(8,4)

//default parameter in function
function visit(name="guest"){
console.log("hello "+ name)
}
visit()//if we are not providing any value visit
