
// Number & Number Method 

/*

toString()	     =>     Returns a number as a string
toExponential()	 =>     Returns a number written in exponential notation
toFixed()	     =>     Returns a number written with a number of decimals
toPrecision()	 =>     Returns a number written with a specified length
ValueOf()	     =>     Returns a number as a number

*/

// toString() => Returns a number as a string


    let numbers = 150;
    let number1 = numbers.toString();
    console.log(number1);
    console.log(typeof number1);

    let number2 = (125+25).toString();
    console.log(number2);
    console.log(typeof number1);


// toExponential() =>  Returns a number written in exponential notation


    let  a = 2500000;

    let  b = a.toExponential();
    console.log(b);

    let  c = a.toExponential(3);
    console.log(c);

    let  d = a.toExponential(4); 
    console.log(d);


// toFixed() => 

    let fix1 = 5.6545;

    let fix2 = fix1.toFixed(1);
    console.log(fix2);

    let fix3 = fix1.toFixed(2);
    console.log(fix3);

    let fix4 = fix1.toFixed(4);
    console.log(fix4);


// toPrecision() => 

    let pre1 = 5.6545

    let pre2 = pre1.toPrecision(1);
    console.log(pre2);

    let pre3 = pre1.toPrecision(2);
    console.log(pre3)

    let pre4 = pre1.toPrecision(4);
    console.log(pre4);


// ValueOf() => 

const numbers2 = 150;
let num1 = numbers2.valueOf();
console.log(num1);

let num2 = (125+25).valueOf();
console.log(num2);

let num3 = (150).valueOf();
console.log(num3);
console.log(typeof num3)

