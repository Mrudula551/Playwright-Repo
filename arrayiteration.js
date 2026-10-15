//to iterate through an array we are using aray iteration means to fetch values from an array we are using iteration 
//using for loop

let fruits=["Mango","Orange","Apple"]
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
//iterate an array using For of loop--simple way of for 
for(let fruit of fruits){
    console.log(fruit)
    }

//Array iteration using foreach method
fruits.forEach(function(fru){
    console.log(fru)
})

//forin -in all other we are not iterating index value -- to fetch index value also then we will use forin
for(let index in fruits){
    console.log(index,fruits[index])//here index is not a keyword just a variable to store the index 
}

//map is used to transform an array into a new array- using commonly in number array 
let numbers=[1,2,3]
let double=numbers.map(num=>num*2)
console.log(double)
