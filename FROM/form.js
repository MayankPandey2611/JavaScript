let val =()=>{

let username = document.querySelector("#name").value 
let phonumber = document.querySelector("#Number").value 
let email = document.querySelector("#Email").value 
let userpassword = document.querySelector("#Password").value 
let cpassword = document.querySelector("#cPassword").value



let error = document.querySelector("#errname")
let error1 = document.querySelector("#errnumber")
let error2 = document.querySelector("#erremail")
let error3 = document.querySelector("#errcpass")
let error4 = document.querySelector("#errpass")



if(username=="" || username==" "){
    error.innerHTML=" please enter your name"
    return false
}



else if(isNaN(phonumber) ){
    error1.innerHTML=" please enter valid number"
    return false
}


else if(phonumber.length!=10){
error1.innerHTML="please enter 10 digit number"
return false
}

else if( !(email.includes("@") && email.includes(".com") )){
    error2.innerHTML=" please enter valid email"
    return false

}

else if(userpassword==""){
    error4.innerHTML= "please enter password"
    return false
}

else if(cpassword!=userpassword){
    error3.innerHTML=" please enter correct password"
    return false

}

}

