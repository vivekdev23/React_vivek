
// String And String Method

/* 

=> String Write In Single Qoutes & Double Qoutes
=> In String Index Start [0] in String get Index Of Character

@ Tamplate Litreals 

=> Tamplate Litreals Use Backtics Insted of Quotes (``) Define A String

ex. let Name = `vivek Patil Is Best "Coder" & "Programeer" Also`

=> This instant Variable Directly in Tamplate is call String Interplation 

ex. let a = `this is ${Name}` // Define Veriable 

*/

let Qua = 'Hello EveryOne';  
let Qua2 = "He is called Johnny!";
let Qua3 = "  He is Very Smart boy    ";
let Qua4 = "5";
let Qua5 = "I love cats. Cats are very easy to love. Cats are very";

// String length

let Ans = Qua.length
console.log(Ans);

// String slice()

let An = Qua.slice(7,13); // last Index Not include
console.log(An);
let Ans2 = Qua.slice(7); // start 7 to continue
console.log(Ans2);


// String toUpperCase() & toLowerCase()

let Ans3 = Qua.toLowerCase()
console.log(Ans3);

let Ans4 = Qua.toUpperCase()
console.log(Ans4);

//  String trim() & trimStart() & String trimEnd()

let  Ans5 = Qua3.trim()
console.log(Ans5);

let Ans6 = Qua3.trimStart()
console.log(Ans6);

let Ans7 = Qua.trimEnd()
console.log(Ans7);


// String split() 

let Ans8 = Qua.split(" ") //split that in Argument in split
console.log(Ans8);
let An2 = Qua.split("e") 
console.log(An2);


// String concat()

let Ans9 = Qua.concat(" ", Qua2)
console.log(Ans9);


// String padStart() & padEnd()

let Ans10 = Qua4.padStart(5,0); // First total Index And secound Enter to Put Value in Start
console.log(Ans10);

let Ans11 = Qua4.padEnd(5,0) // First total Index And secound Enter to Put Value in End
console.log(Ans11);

// String replace() & replaceAll()

let Ans12 = Qua5.replace("cats", "dogs")
console.log(Ans12)

let Ans13 = Qua5.replaceAll("Cats" ,"Dogs")
console.log(Ans13);


// String charAt() & charCodeAt()

let Ans14 = Qua.charAt(4) //  specified index Enter Give the Charactre in a string
console.log(Ans14);

let Ans15 = Qua.charCodeAt(0) // returns a UTF-16 code (an integer between 0 and 65535) 
console.log(Ans15);


// String substring() & substr() 

