// is a fn that remembers variables from its outer fn after the outer fn has finished executing
function outer(){
let name="David"
console.log("Hello")
function inner(){
    console.log(name)
}
return inner
}
const x=outer()
x()//function invoking
