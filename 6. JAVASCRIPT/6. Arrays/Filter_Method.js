/*

Filter() Method -> Filter an Array With Values that passes test . Creat New Array 

-> Not be Modifiying Orignal Array  ; return Arrays 
  
*/

// 1st Exampale 

arr = [5 , 8 , 45 , 25 , 36 , 19]
 
let a = arr.filter((age) => {

   return age > 18 ;

})

console.log(a); 

// 2nd Exampale 

arr2 = ["apple" , "Banana" , "cherry"  ]

let b = arr2.filter((word)=>{

    return word.length > 5 ; 

})

console.log(b);

// 3rd Exampale

let arr3 = ["apple", "mango", "apple","orange", "mango", "mango"];

let c = arr3.filter((item,index) => {

    return arr3.indexOf(item) === index

})

console.log(c);  // remove Duplicate Arrays Here 

