
// Arrays & Arrays Method 

/* 
=> An array is a special variable, which can hold more than one value.
=> Syntex :: >> let array_name = [item1, item2, ...]
=> In Array Index Start [0] 
*/

let Arr = ["Apple" , "Mango" , "KiWi", "Banana" , "Orange"];
let Arr2 = ["vivek" , "Prachu" , "Himanshu" , "Jayesh" , "Ram"];
let Arr3 = [1,2,3,4,5];

// length & typeof Property

console.log(Arr)
console.log(Arr.length)
console.log(typeof Arr)

// Push() => Add one & more Element In End of An Arrays.

let newArr = Arr.push("Waterlemon"); // return length (6) 
console.log(newArr); // return full Array


// pop() => Remove last Element in An Arrays . 

let newArr1 = Arr.pop() // return deleted element
console.log(newArr1);


// shift() => Remove First Element In An Arrays . 

let newArr2 = Arr.shift()  // return Deleted element
console.log(newArr2);


// unshift() => Add one & more Element in Start of Array 

let newArr3 = Arr.unshift("pan")  // return length (5)
console.log(newArr3);


// slice () =>  Start Index to Last Index Arrays Show them (Note: Last index no include That)

let An = Arr.slice(2,4); // last Index Not include
console.log(An);
let Ans2 = Arr.slice(1); // start 7 to continue
console.log(Ans2);                                


// splice() => The splice method Add new element any position and Remove With also in Array 

let Ans3 = Arr.splice(2 , 0 , "try") // return Deleted element 
console.log(Ans3);

// concat() => return a new Array & include element from the arrays.

let Ans4 = Arr.concat(Arr2)
console.log(Ans4);

// includes() => the method cheack is an element present or not in Array return true/False

let Ans5 = Arr.includes("KiWi") // return True
console.log(Ans5);

let An3 = Arr.includes("vivek")
console.log(An3);

//  Join() => Join All Element of an Arrays into a String . element are speretrd by specified seprete element . 

let Ans6 = Arr.join("*")
console.log(Ans6)

// Reverse() => reverse the Arrays 

let Ans7 = Arr2.reverse()
console.log(Ans7);

// toString() => return a String represting Specified number Of Array 

let Ans8 = Arr3.toString()
console.log(Ans8);

// indexof & lastindexof =>  




// sort() => 




// 