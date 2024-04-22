
// Session Storage :

/*
=> Session Storage Property And method same as Local Storage but , 
=> session storage Data Save only refresh not closing and opening tab , 
=> session storage same as key , value and the data save as local storge 

-> sessionStorage.getItem(key)  -> sessionStorage.setItem(key , value)

 */


// 1st Exampale 

let key = prompt("Enter key Value :- ")
let value = prompt("Enter value  here  :- ")

sessionStorage.setItem( key , value )

console.log(`the value at ${key} is ${sessionStorage.getItem(key)}`);



