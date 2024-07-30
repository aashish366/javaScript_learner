                                                //const
// Const variable can't be updated or re-declared; this behavior of const variable helps us to write error-free code.

// In the example, we have a variable accountId in the first line, then we initialize another value to our accountId variable.
// When we try to print the accountId variable to the console, it shows TypeError, which means we can't update the const variable.

const accountId=5545;
// accountId=3432;
console.log(accountId);

                                      //var
// var variable can be re-declared and updated. re-declaration allows declaring more than one variable with the same name, because of this reason, 
// if we declare a new variable by mistake, 
// it will override the original variable value.

var a=10;
if(true)
{
    var a=15;
    console.log(a);
}
console.log(a)

                                      //let
// Let variable introduce a special feature that does not allow re-declaration of variables, if you remember, 
// re-declaration was a problem in var variable but let variable solve this problem.

// The let variable has block scope, 
// meaning let variable will be accessible only inside the block it's declared if we try of access outside of the scope, 
// it will show a Reference Error.

let c=1;
let age=6;
if(age>5)
{
    let name="vishal"; // The let variable has block scope, 
}
console.log(name);



// let a=10;
// a=20;               // we can not change or update the variable value once we decleared it with let variable 
// console.log(a);


// let b=10;
// let age=16;
//  if(age>15)
//  {
//     let b=50;
//     console.log(b);
//  }
//  console.log(b);   