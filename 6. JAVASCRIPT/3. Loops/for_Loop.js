
// For_loops in javascript 

/*

=> The for statement creates a loop with 3 optional expressions.

-> syntex :: 

    for (expression 1; expression 2; expression 3) {

            // code block to be executed
    }

 */


// 1st Print the numbers from 0 to 15.

let a;
let n = 15;

for ( a=0 ; a<=n ; a++ )
{
    console.log(a);
} 

// 2nd Print the numbers from 12 to 24 .

let b;
let m = 24;

for (b=12 ; b<=m ; b++)

{
    console.log(b);

} 

// 3rd Print the ODD numbers from 7 to 31.

let c;
let l=31

for(c=7 ; c<=l ; c++) {

    if(c%2==1)
    {
        console.log(c);
    }

} 


// 4th  Print the EVEN numbers from 10 to -20. 

 let i;
let j = -20;
  for (i = 10; i >= j ; i--) {
    
    if (i % 2 == 0) {

        console.log(i);

    }
} 


/**  5th Iterate through all numbers from 1 to 45. Print the following : 

 ● For multiples of 3 print “Fizz”
 ● For multiples of 5 print “Buzz”
 ● For multiples of 3 and 5 print “FizzBuzz”

*/

let d;
let e=45;

for (d = 1; d <= e ; d++) {

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

    else 
   
    {
        console.log(d);
    }
}

// 6th Print all the elements of the following array
// ** thisIsAnArray = ["element1","element2","element3","element4"];



thisIsAnArray = ["element1","element2","element3","element4"];

let p;

for (p = 0; p < thisIsAnArray.length; p++) {

    console.log(thisIsAnArray[p]);

 }


// 7th Calculate the sum of all the numbers in the following array

   let NumbersArray = [1,13,22,123,49]
   let h;
   let sum = 0 ;

   for(h = 0; h < NumbersArray.length; h++) {

    sum += NumbersArray[h];

}
console.log(sum);
   









