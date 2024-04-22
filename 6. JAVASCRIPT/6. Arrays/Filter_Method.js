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


// 4rd Exampale

let arr4 = [{ id:1 , name : "vivek" , Age : 23 , Result : "pass"  }, 
{ id:2 , name : "Harmi" , Age : 17 , Result : "pass"  } , 
{ id:3 , name : "Madam" , Age : 38 , Result : "pass"  }, 
{ id:4 , name : "Tejasvi" , Age : 17 , Result : "pass"  },
{ id:5 , name : "Jagdish" , Age : 24 , Result : "pass"  },
{ id:6 , name : "Harshit" , Age : 25 , Result : "pass"  }
];

let d = arr4.filter((item) => item.name === "Madam")

console.log(d) ; 



