
// Destructuring Arrays 

/*
=> Here is the new way of assigning array items to a variable:

=> Destructuring arrays in JavaScript allows you to extract multiple values from 
    an array into distinct variables in a more concise and readable way. 

 */

// Destructuring in simple Veriable

let user = ["vivek" , 21 , "Surat" ]

let [name , Age , city ] = user

console.log(name);
console.log(Age);

// Destructuring in Function 

function user2([name , Age , city ]) {

    console.log(name);
    console.log(Age);
    console.log(city);
}

user2( ["vivek" , 23 , "Surat" ] );


// Destructuring in Arrow Function

const user3 = ([name , Age , city ]) => {
    console.log(name);
    console.log(Age);
    console.log(city);
}

user3 ( ["vivek" , 25 , "Surat" ] );






