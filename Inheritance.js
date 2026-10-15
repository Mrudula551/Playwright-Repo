//Inheritance

class Animal{
    eat(){
        console.log("Animal is eating")
    }
}
class Dog extends Animal{
bark(){
    console.log("Dog is barking")
}
}
const dog1= new Dog()
dog1.eat()
dog1.bark()
