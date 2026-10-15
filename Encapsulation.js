//More secure 
class Student{
    #marks=90//# used for making it as private- access within that class
    getmarks(){
        return this.#marks
    }
}
const s1= new Student()
console.log(s1.getmarks())