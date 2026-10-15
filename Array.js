//Array literal-commonly used
//the below techniques are used to fetch the array itself not the value

let fruits=["Mango","Orange","Apple"]
console.log(fruits)

//empty array first declaration then initilisation in a index based
let numbers=[]
numbers[0]=10
numbers[1]=20
console.log(numbers)

//Using array constructor
let colours = new Array("Red","Blue","Yellow")
console.log(colours)

//creation of array with a specific size
let arr=new Array(5)//here 5 is the space
console.log(arr)
//length of an array means the total number of item present in an array
let colour= new Array("Red","Blue","Yellow","Black")
console.log(colour.length)//length is for getting size of an array

//Array dot of method
let num=Array.of(10,20,30)
console.log(num)
