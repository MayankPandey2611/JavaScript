

//-----------------------------------------------FILPCART TASK -----------------------------------------------------//

// let image1 = ()=>{
//     let show = document.querySelector("#main")
//     show.style.backgroundImage = 'URL(https://tse3.mm.bing.net/th?id=OIP.U_VJuupQohwnzXcKMztqWgHaEo&pid=Api&P=0&h=180)'
// }


// let image2 = ()=>{
//     let show1 = document.querySelector("#main")
//     show1.style.backgroundImage = 'URL(https://tse3.mm.bing.net/th?id=OIP.j4KdqaXpnhbN94WzVyHUhAHaE8&pid=Api&P=0&h=180)'
// }



// let image3 = ()=>{
//     let show2 = document.querySelector("#main")
//     show2.style.backgroundImage = 'URL(https://themewagon.github.io/Coffo/images/img-1.png)'
// }


// -------------------------------------------PARAGRAPH FONT SIZE TASK---------------------------------------------------------//

// let  change = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.fontSize = "30px";
// }

// let  hide = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.display= "none";
// }

// let  unhide = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.display = "block";
// }

// let  reset = ()=>{
//     let show  = document.querySelector("#text")
//     show.style.fontSize = "16px";
// }



// ------------------------------------------------INCREMENT AND DRECMENT COUNTING TASK-----------------------------------------------//

let count = 0;

let incre = ()=>{
    
    let show = document.querySelector("#counting");
    show.innerHTML= count++;
}
let decre = ()=>{
    
    let show = document.querySelector("#counting");
    show.innerHTML= count--;
}