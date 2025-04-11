let val =()=>{

let username = document.querySelector("#name").value 
let error = document.querySelector("#errname")




if(username=="" || username==" "){
    error.innerHTML=" please enter your name"
    return false
};

let phonumber = document.querySelector("#Number").value 
let error1 = document.querySelector("#errnumber")


if(phonumber<10 || phonumber==0){
    error1.innerHTML=" please enter valid number"
    return false

};


let email = document.querySelector("#Email").value 
let error2 = document.querySelector("#erremail")


 if(email =="" ){
    error2.innerHTML=" please enter valid email"
    return false

};


let userpassword = document.querySelector("#Password").value 
let cpassword = document.querySelector("#cPassword").value
let error3 = document.querySelector("#errcpass")


 if(cpassword!=userpassword){
    error3.innerHTML=" please enter correct password"
    return false

};

}

