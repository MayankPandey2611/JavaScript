
let store =''

let val=(value)=>{
    let show = document.querySelector("#display")
    store= store+value
    show.innerHTML = store
}


let result = ()=>{
    let show = document.querySelector("#display")

    store = eval(store)

    show.innerHTML = store
}