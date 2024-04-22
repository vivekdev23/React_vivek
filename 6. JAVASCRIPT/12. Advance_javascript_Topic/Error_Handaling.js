
// Error Handling iN javascript 

/*

=> Some Time script can have mistake Error , Ussaly Programm Show Error And Stop Script . 
=> in ( try, catch, and finally ) Method allow Us to Catch Error And Not Stop script contuniu them . 

-> syntax :> 

    try {

        // they Code Mistake Here
    }
    catch(Error)
    {
        //Error Handle Them .
    }

 */

//  Exampale

try {

    console.log(myVariable);

} catch (error) {

    console.error('Error:', error.message);

} finally {
    
    console.log('Cleanup code here');
}


// try ..catch  useing In setTimeout


setTimeout ( () => {

    try {

        console.log(myVariable);
    
    } catch (error) {

        console.error("Error is Loding That ");
        console.error(" Erorr Show In Secound");
        console.error(" Erorr Show finally");
    }  

}, 2000);

