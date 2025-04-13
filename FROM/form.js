let val =()=>{

let username = document.querySelector("#name").value
let phonumber = document.querySelector("#Number").value 
let email = document.querySelector("#Email").value 
let userpassword = document.querySelector("#Password").value 
let cpassword = document.querySelector("#cPassword").value
let Send = document.querySelector(".send").value

let username1 = document.querySelector("#name")
let phonumber1  = document.querySelector("#Number")
let email1 = document.querySelector("#Email")
let userpassword1 = document.querySelector("#Password")
let cpassword1 = document.querySelector("#cPassword")


let error = document.querySelector("#errname")
let error1 = document.querySelector("#errnumber")
let error2 = document.querySelector("#erremail")
let error3 = document.querySelector("#errcpass")
let error4 = document.querySelector("#errpass")



if(username=="" || username==" "){
    error.innerHTML=" please enter your name"
    error.style.color="red"
    username1.style.border=" 1px solid red"
    return false
}



else if(isNaN(phonumber) ){
    error1.innerHTML=" please enter valid number"
     error1.style.color="red"
     phonumber1.style.border=" 1px solid red"
    return false
}


else if(phonumber.length!=10){
error1.innerHTML="please enter 10 digit number"
 error1.style.color="red"
      phonumber1.style.border=" 1px solid red"
return false
}

else if( !(email.includes("@") && email.includes(".com") )){
    error2.innerHTML=" please enter valid email"
     error2.style.color="red"
     email1.style.border=" 1px solid red"
    return false

}

else if(userpassword==""){
    error4.innerHTML= "please enter password"
     error4.style.color="red"
     userpassword1.style.border=" 1px solid red"
    return false
}

else if(cpassword!=userpassword){
    error3.innerHTML=" please enter correct password"
     error3.style.color="red"
     cpassword1.style.border=" 1px solid red"
    return false

}

else if(Send){
    confirm("Successfully Login Do You Want To Save The Id Password !")
      return false
}

}

