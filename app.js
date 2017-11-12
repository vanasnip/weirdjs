// javascript hoisting,
// bad practice

// hoisting is the result of two phases

// 1. creation phase of the execution context 
//      where space is allocated in memory 
//      for variables and functions
//      functions declaration and definition 
//      are put into memory
//      however all variables are assigned as 
//      undefined. Assignment happens in the 
//      second phase;

// 2. execution phase of the execution context
//      in this phase the code is executed line 
//      by line. Where you have assigned variables 
//      a value JS will replace in memory the *undefined* value
//      from the first phase (creation phase) with
//      the new assigned value in the code.
//      **** When the variable is used, JS will look up
//      the value in memory and use that value.

//      In a situation where the variable is used
//      without a declaration and assignment of
//      a value before, JS will still
//      look up and find in memory the value
//      from the first phase and retrieve the *undefined* value

function b(){
    console.log('Called b!');
}

b();

console.log(a);

var a = 'Hello world!';

console.log(a);

