
// Destructuring object 

/*
=> Here is the new way of assigning object items to a variable:

=> Destructuring in JavaScript is a way to extract multiple values from 
an object or an array into distinct variables.

 */

// Destructuring in Object 

let user = {

    name :  "Vivek" ,
    age : 22 ,
    city : "Surat"
}

const { name , age , city } = user;

    console.log(name);
    console.log(age);
    console.log(city);


// Destructuring in Secound Way to called " alice name " 


let user2 = {

    Name :  "Vivek" ,
    Age : 24 ,
    City : "Surat"
}

let { Name : n , Age : a , City : c } = user2 ; 

    console.log(n);
    console.log(a);
    console.log(c);








