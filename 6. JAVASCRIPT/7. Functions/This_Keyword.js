
// This Keyword In Javascript 

/*
=> this keyword refer at an object 
=> Alone , this refer to the globel object and also same as in function()
=> in event this referens to the elemnt that resive the event 
 */

// Exampale 

const person = {

    firstName : "Vivek",
    lastName : "Patil",
    Id : "567" ,
    fullName: function(){

        return this.firstName + " " + this.lastName ; 
    }
};

console.log(person.fullName());

// Exampale 



