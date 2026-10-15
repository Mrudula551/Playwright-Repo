//this keyword referes for current class
const person={
    name:"Alice",
    greet(){
        console.log(this.name)
    }
}
person.greet()

