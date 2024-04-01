
// High Order Array Method (ES6)

/*

Map() Method -> Create New Arrays . Perfoming Some Opretion An Each Arrays Element 

-> Map method Give the (value , index , array ) predifine opretion That here 

-> Not be Modifiying Orignal Array ; return Arrays
  
 */

// 1st exampale 

let arr = [2 , 5 , 9 ]

let a = arr.map((value , index , array) => {
    console.log( value , index , array)
    return value + index ;
})

console.log(a)


//2nd Exampale 

let arr2 = [1 , 3 , 5 , 8 , 10 ]

let a2 = arr2.map((value) => {
    return value * 10 ;
})

console.log(a2)


//3rd Exampale 

let arr3 = [ 
    { fname:"vivek" , lname:"patil" },
    {fname:"pracha" , lname:"Agrawal"},
    {fname:"Hemu" , lname:"Tiwari"} ];

let a3 = arr3.map((name) => {
    console.log(name.fname + " " + name.lname)
    return name.fname;
})

console.log(a3);




 


