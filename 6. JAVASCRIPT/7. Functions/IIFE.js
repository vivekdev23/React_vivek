
// IIFE - Immediately Invoked Function Expression 

/**
 * 
=> A self invoking expression is invoked (Started) Autometicall , Without being called 
=> function expression will executed Autometically is followed ()  
=> self invoking mostly Used that Asyn & Awaite in Javascript .. 

 */

// 1st Exampale 

(function () {

    let a = "Hello EveryOne I am called Myself"
    console.log(a)

})();

// 2nd Exampale 

(function (a,b) {

    let c = a + b; 
    console.log(c)

})(4,5);


