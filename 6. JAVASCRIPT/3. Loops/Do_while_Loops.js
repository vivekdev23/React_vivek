
// Do_While Loops In Javascript 

/*

=> The do while loop is a variant of the while loop.

-> syntex :: 
    
      do {

            // code block to be executed
        }

            while (condition);

 */

// 1st Print the numbers from 0 to 15.

let i=0
let n = 15;
let sum = 0;

do{
    console.log(i)
    i++;
}
while (i<=n) ;


// 2nd Print the numbers from 12 to 24 .

let b = 12;
let m = 24;

do {
         console.log(b);
         b++;
	}
while(b<=m) ; 


 /* 3rd Iterate through all numbers from 1 to 45. Print the following : 

 ● For multiples of 3 print “Fizz”
 ● For multiples of 5 print “Buzz”
 ● For multiples of 3 and 5 print “FizzBuzz”

*/

let d = 1;
let e = 45;

do {

    if (d % 3 == 0 && d % 5 == 0) {
        
        console.log("FizzBuzz");
    }

    else if(d % 3 == 0)

    {
        console.log("Fizz");
    }

    else if  (d % 5 == 0)
    {
        console.log("Buzz");
    }
            d++ ; 
}

      while (d <= e ); 

      
