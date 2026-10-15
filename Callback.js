function greet(name){
    console.log("Hello," +name)
}
function user(callback){
    let user="JOHN"
    callback(user)
}
user(greet)


//callback hell