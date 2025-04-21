
let setalarm = ()=>{
    let SHOW = document.querySelector("#settime").value 

    let SHOW1 = document.querySelector("#show")

    let audiosound = document.querySelector("#audioo")
    setInterval( ()=>{

        let time = new Date()
        let alarmtime =`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`
       
        if(alarmtime == SHOW ){
            SHOW1.innerHTML = "Alarm is ringing"
            audiosound.play()
        }
        else{
            SHOW1.innerHTML = "Alarm is set"
        }

    },1000)
   
}

let stopalarm = ()=>{
    let audiosound =  document.querySelector("#audioo")
    audiosound.pause()
}