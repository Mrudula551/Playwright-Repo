//scope chain- if a variable is not found in the current scope, js looks in the outer scope, then the next outer scope and so on untill it reaches the global scope
let name="John"
function outer(){
    let age=22
    function inner(){
        let city="Kannur"
        console.log(name)
        console.log(age)
        console.log(city)
        }
        inner()
}
outer()
