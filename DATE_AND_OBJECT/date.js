
//----------------------------------SOME INBULIT FUNCTION OF DATE DATATPYE--------------------------------------------------//
    // 1. getFullYear()  
    // 2. getHours()
    // 3. getMonth()
    // 4. getDate()
    // 5. getDay()
    // 6. getMinutes()
    // 7. getSeconds()
    // 8. getMilliSeconds()
    // 9. toLocaleString()  // GET READABLE FORMAT



// let mydate = new Date()
// console.log(mydate.toLocaleString());
// console.log(mydate.getDate());
// console.log(mydate.getFullYear());
// console.log(mydate.getDay());
// console.log(mydate.getMonth());
// console.log(mydate.getMinutes());
// console.log(mydate.getSeconds());
// console.log(mydate.getMilliseconds());
// console.log(mydate.getHours());
// console.log(mydate.getTime());

// let arr =["sunday","monday","tuesday","wednesday","thursday","friday","saturaday"]

// console.log(arr[mydate.getDay()]);

setInterval(() => {
    let mydate = new Date()
    let show = document.querySelector("#display")
    show.innerHTML =`Hours = ${mydate.getHours()}  : minutes =  ${mydate.getMinutes()} :  seconds = ${mydate.getSeconds()} `
}, 1000);


