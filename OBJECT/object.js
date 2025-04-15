
// let obj ={
//     // KEY : VALUE
//     Name: "Mayank",
//     Age : 21,
//     City : "bhopal"
// }

// // USED TO UPDATE THE VALUES OF THE OBJECT
// obj.Age=22

// // USED TO ADD THE NEW KEY AND VALUE IN THE OBJECT
// obj.college = "SIRT"

// // USED TO DELETE THE KEY AND ITS VALUE FROM THE OBJECT
// delete obj.City

// //  USED TO PRINT FULL DETAILS FROM THE OBJECT FUNCTIONS
// console.log(obj);

// // USED TO PRINT THE DEMANDED DETAIL FROM THE OBJECT.
// console.log(obj.Name);


//--------------------------------------------DESTRUCTURING THE OBJECT----------------------------------------------------------//

// 1. IT MAKES THE CODE CLEANER AND EASIER TO READ.
// 2. IT ALLOWS QUICK ACCESS TO OBJECT PROPERTIES.


// let obj1 ={
//     // KEY : VALUE
//     Name: "Mayank",
//     Age : 21,
//     City : "bhopal",
//     College :"SIRT"
// }
// // DESTRUCTURING...
// let {Name,Age}=obj1;

// console.log(Name);
// console.log(Age);



//--------------------------------------------SPREAD OPERATOR(...)---------------------------------------------------//

// 1. USED TO MERGE OBJECTS OR ARRAY.
// 2. TO COPY EXISTING OBJECTS / ARRAYS INTO A NEW ONE.


let obj2 = {
    Name : "Mayank",
    Language : "JAVASCRIPT"
}

let obj3 ={
    age : 21,
    city:"bhopal"
}

// SPREAD (...)
let merge = {...obj2 , ...obj3};

console.log(merge);

