let numbers=[]
numbers.push(10)
numbers.push(20)
numbers.push(30)
numbers.push(40)
console.log(numbers)

//this filter will not make any difference to the existing array it will just create a new array
let num=[10,20,30,40,50]
console.log(num.filter(num1=>num1>20))
//find


//shift
num.shift()
console.log(num)

//checks whether the element is present or not ;returns true or false
console.log(num.includes(30))
console.log(num.includes(100))
//index of to return the index of an element
console.log(num.indexOf(30))
//reverse to print in the reverese order
num.reverse()
console.log(num)

