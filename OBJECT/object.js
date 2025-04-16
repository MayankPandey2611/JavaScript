
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


// let obj2 = {
//     Name : "Mayank",
//     Language : "JAVASCRIPT"
// }

// let obj3 ={
//     age : 21,
//     city:"bhopal"
// }

// // SPREAD (...)
// let merge = {...obj2 , ...obj3};

// console.log(merge);



//-------------------------------------------FOR IN LOOP------------------------------------------------//
//  USED TO GET THE KEY VALUES IN OBJECT.

// let obj = {
//     name : "mayank",
//     age:21,
//     city:"bhopal"
// }


// for(let key in obj){
//     // console.log(key);
//     console.log(key);
    
// }



//---------------------------------------------FOR OF LOOP--------------------------------------------------//
//  

// let arr = ["ok","hello","hii"]

// for(let elements of arr){
//     console.log(elements);
    
// }



//---------------------------------------------MAP FUNCTION----------------------------------------------------//
//  IT ACCESS / INTERATE THE EVERY VALUE OF THE ARRAY AND RETURNS THE NEW ARRAY.
// e = EVENT / ELEMENT 

let arr = [1,2,3,4,5]

let newarr = arr.map( (e)=>{
    return e*2;
})

console.log(newarr);
