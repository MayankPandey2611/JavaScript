
let arr = ["apple","mango",20,]  //ARRAY
let obj ={
    name : "mayank",    //OBJECT
    age : 21

}

//--------------------------------------------------------------ARRAY OF OBJECT-----------------------------------------------//

let arrayOfObject = [ {

    name : "Mayank",
    age : 21,
    city : "Bhopal",
    Gender : "Male"

}, {

    name : "Ayushi",
    age : 24,
    city : "Indore",
    Gender : "Female"

}, {

    name : "Piyush",
    age : 19,
    city : "Rewa",
    Gender : "Male"

},{

    name:"Yash",
    age:21,
    city:"Pune",
    Gender : "Male"
    
}]

console.log(arrayOfObject[0]);


let display = document.querySelector("#showdata")

arrayOfObject.map( (e)=>{

    display.innerHTML += `
    <tr>
    <td> ${e.name}  </td>
    <td> ${e.age}  </td>
    <td> ${e.city}  </td>
    <td> ${e.Gender}  </td>
    
    </tr>
    `

})