
let arr = ["apple","mango",20,]  //ARRAY
let obj ={
    name : "mayank",    //OBJECT
    age : 21

}

//--------------------------------------------------------------ARRAY OF OBJECT-----------------------------------------------//

let arrayOfObject = [ {

    name : "mayank",
    age : 21,
    city : "bhopal"

}, {

    name : "ayush",
    age : 24,
    city : "indore"

}, {

    name : "piyush",
    age : 19,
    city : "rewa"

}]

console.log(arrayOfObject[0]);


let display = document.querySelector("#show")

arrayOfObject.map( (e)=>{

    display.innerHTML += `
    <div>
    <h1>name :- ${e.name}  </h1>
    <h1>age :- ${e.age}  </h1>
    <h1>city :- ${e.city}  </h1>
    
    </div>
    `

})