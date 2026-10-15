//same method doing different action
//this keyword for current class
//super is for immediate parent
class Addition{
    calculation(){
        console.log("Addition of numbers")
    }
}
class Multiplication extends Addition{
    calculation(){
        console.log("Multiplication of numbers")
        super.calculation()
    }
}
class Division extends Addition{
    calculation(){
        console.log("Division of numbers")
        super.calculation()
    }
}
const num1= new Multiplication()
num1.calculation()
//to invoke the parent class
const num2= new Division()
num2.calculation()
