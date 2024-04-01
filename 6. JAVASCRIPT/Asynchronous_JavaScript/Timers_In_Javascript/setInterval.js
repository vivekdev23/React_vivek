
// setInterval In Javascript 

/*
 setInterval() => SetTimeout Allows To run a function Once After the Inteval of time 

syntex -> 

    setInterval(() => {

        // code here 

    }, timeout (in milisecound));

*/

// 1st  Exampale 

setInterval(() => {

    alert("Hello Everyone The SetTimeout Running ")
    
}, 2000);

// 2nd Exampale 

const Sum = (a , b , c) => {

    alert ("Yes I am Sum Of " + " " + (a+b+c));
}

setInterval(Sum , 1000 , 1 , 2 , 4); 
