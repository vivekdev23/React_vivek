
// While_loops 

/*

=> The while loop loops through a block of code as long as a specified condition is true.

-> syntex :: 
    
        while (condition) {

        // code block to be executed

        }

 */

// 1st Print the numbers from 0 to 15.

let i=0
let n = 15;
let sum = 0;

	
	while(i<=n)
	{
                console.log(i);

			i++;
	} ;


// 2nd Print the numbers from 12 to 24 .

let b = 12;
let m = 24;

while(b<=m)
	{
                console.log(b);

			b++;
	} ;


/**  3rd Iterate through all numbers from 1 to 45. Print the following : 

 ● For multiples of 3 print “Fizz”
 ● For multiples of 5 print “Buzz”
 ● For multiples of 3 and 5 print “FizzBuzz”

*/

let d = 1;
let e = 45;

while (d <= e ) {

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

