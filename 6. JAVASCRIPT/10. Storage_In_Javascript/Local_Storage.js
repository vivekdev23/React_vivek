
// LocalStorage In Javascript 

/*

=> local storage is a web storage Object Which Are not sent a server with each  request
=> this data service than full page refresh and even a full browser request , data not Gone it 
=> Both are Key & value payer And must be string and We can use the Two Json Mehtod to 
Store object in Localstorage . 

-> getItem(key)   -> setItem( key , Value )

 -> localstorage.removeItem()

 */

// 1st Exampale 

let key = prompt("Enter key Value :- ")
let value = prompt("Enter value  here  :- ")

localStorage.setItem(key , value )

console.log(`the value at ${key} is ${localStorage.getItem(key)}`);

// useing if..else 

if(key=="red" || key =="vivek"){
    
    localStorage.removeItem(key)
}
else{

    localStorage.clear()
}

 
