/*

reduce() Method -> reduce An arrys to A single Value ; return Value  

-> Not be Modifiying Orignal Array 
  
*/

// 1st Exampale 

arr = [2 , 4 , 6 , 9 , 12]

let a = arr.reduce((h1 , h2)=>{

    return h1 + h2  ; 

})

console.log(a)


