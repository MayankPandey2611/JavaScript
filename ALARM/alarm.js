// Global variable to store the interval ID
let intervalId; 

let setalarm = () => {
    let SHOW = document.querySelector("#settime").value;
    let SHOW1 = document.querySelector("#show");
    let audiosound = document.querySelector("#audioo");

    // Clear any previous intervals before setting a new one
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
        let time = new Date();
        let alarmtime = `${time.getHours().toString().padStart(2, "0")}:${time.getMinutes().toString().padStart(2, "0")}`;

        if (alarmtime === SHOW) {
            SHOW1.innerHTML = " Alarm is ringing!";
            audiosound.play();
        } else {
            SHOW1.innerHTML = " Alarm is set";
        }
    }, 1000);
};


let stopalarm = () => {
    let audiosound = document.querySelector("#audioo");
    audiosound.pause();

    // Reset audio
    audiosound.currentTime = 0; 

    alert(" Alarm stopped");

    // Clear the interval
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
    }
};


let reset=()=>{
    let SHOW1 = document.querySelector("#show");
    // if (intervalId) clearInterval(intervalId);
    SHOW1.innerHTML = ""
}

// ✅ 🔕 ⏰