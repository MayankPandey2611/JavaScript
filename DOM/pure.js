//----------------------------------------------EVENT LISTENERS-------------------------------------------------------------//

// let BTN = document.querySelector("#btn")

// //1. ONCLICK
// BTN.addEventListener('click' , ()=>{
//     alert("welcome");
// })


// let INP = document.querySelector("#inp")

// // 2.ON KEYDOWN
// // INP.addEventListener('keydown', (e)=>{
// //     console.log(e.key);
    
// // })


// //3. ON INPUT
// INP.addEventListener('input' , ()=>{
//      console.log(INP.value);
    
// })

// // 4. IN WEBSITE
// INP.addEventListener('input' , ()=>{
//     let show = document.querySelector("#s")
//          show.innerHTML=(INP.value);
        
//     })


// --------------------------------------------------CREATE ELEMENT------------------------------------------//

let  head = document.createElement('h1')

head.innerText = "hello javascript"

let Box = document.querySelector("#box")

Box.appendChild(head)