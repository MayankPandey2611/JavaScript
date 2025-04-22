
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

// setInterval(() => {
//     let mydate = new Date()
//     let show = document.querySelector("#display")
//     show.innerHTML =`Hours = ${mydate.getHours()}  : minutes =  ${mydate.getMinutes()} :  seconds = ${mydate.getSeconds()}`
// }, 1000);



//-------------------------------------------------------SOME MATH METHODS----------------------------------------------------------//

//1. MATH.RANDOM =>  IT GENERATES RANDOM NUMBERS FROM 0 TO 1.
//2. MATH.FLOOR => IT IGNORES THE DECIMAL PLACE VALUES.
//3. MATH.TRANC => IT TAKES NEAREST INTEGETR VALUE FOR EXAMPLE IN BOTH CASES OF 4.3 OR 4.7 THE ANSWER IS 4.

// QUES 1. GENERATE RANDOM OTP.
// console.log(Math.round(Math.random()*10000));   // FIRST METHOD.

console.log(Math.floor(1000 + Math.random() * 9000));    // SECOND METHOD
                                          
