


// 1th Check if a number is positive, negative, or zero

let num = 0;

if (num > 0){
    console.log("The number is positive");

} else if (num < 0) {
    console.log("The number is negative");

} else {
    console.log("The number is zero");
}

// 2nd Check if a person is eligible to vote

let age = 21;

if (age >= 18) {
    console.log("The person is eligible to vote");
} else {
    console.log("The person is not eligible to vote");
}

// 3rd Determine the largest of three numbers


let a = 15;
let b = 10;
let c = 8;

if (a >= b && a >= c)
{
    console.log("The largest number is: " + a);
} 
else if (b >= a && b >= c) {
  
    console.log("The largest number is: " + b);
} 
else {
  
    console.log("The largest number is: " + c);
}


// 4th Check if a year is a leap year 

let year = 2004;

 if (year % 4 == 0) {
   
        console.log(year + " is a leap year");
   
    } else {
        console.log(year + " is not a leap year");
    }
 

// 5th  Determine the grade based on a score 


let score = 85;

let grade;

if (score >= 86) {
    grade = "A";
  
} else if (score >= 75) {
    grade = "B";
  
} else if (score >= 65) {
    grade = "C";
  
} else if (score >= 45) {
    grade = "D";
  
} else {
    grade = "FAIL";
}

console.log("The grade for the score " + score + " is: " + grade);



