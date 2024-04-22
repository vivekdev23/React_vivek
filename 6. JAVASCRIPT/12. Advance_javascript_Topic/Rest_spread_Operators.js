
// Rest & Spread Operatore

/* 

=> Rest Operatore Using That function With multipale Arguments  
 
 */

// 1st Exampale 

const myfun = (name , ...arg) => {

    let sum = 0;

    for (let i in arg) {
        sum += arg[i];
    }
    console.log(name)
    console.log(sum)
}

myfun("vivek Patil" , 20 , 45 , 45 , 48) ;

// 2nd Exampale 


/* 

=> Spread Operatore Using That function With multipale Arguments 

=> Spread Operatore Always Use in function call time in as argument .. 

 */
