let showNotes_1 = ()=>{
    console.log(
`   
- Syntax parsers - 
takes your code and turn them into computer instructions. Translation process, character by character and checking if it makes sense.

- Lexical Environment -
where you write something is important. So variables for instance can have an affect on the output of your code depending on the the lexical environment they exist in.

- Execution context -
Is the stage on which code is executed. Where a block of code is placed relative to other blocks of code plays a significant role in defining what we are calling execution context.
The widest EC is the global scope, it something that function redefine. Functions create a new, smaller execution context or stage on top the existing one.
Then placing a function with in the new function creates an excution context with that first function.
There are privacey implecations to this that mean ultimately what is inside an excution can only be accessed from with in the EC, anything outside doesnt have access.

- Global - 
Not inside a function
`);
}
let showNotes_2 = ()=>{
    console.log(
`   
- Global | This | External - 
in a global execution context external access == null.
anyway the global object provided by JS is window and any variables, object and function we create in the global execution context get attatched to the Window object.
We also get the "this" object which is === to window so both equal in value and of the same type.
`);
}

let paradmShift = ()=>{
    console.log(
`   
- Notes on Execution Context -
An execution context is created in two phases
1. The first being (CREATION PHASE)
        in this phase we have:
        - Global Object (only in global execution context) >> setup in memory
        - 'this' (always created in an execution context)>> setup in memory
        - Outer environment (in global execution context it would be null)>>
        
        - then sets up memory space for variables and functions "hoising"
        in other words, before your code runs, the javascript engine sets aside memory for your declarations, functions and variables

        it does this differently for functions and variables;
        the entire function declaration and definitions is placed into memory, nothing is left out
        on the other hand, in the next phahse, the second phase, the execution phase, where the code is executed line by line, thats when assignments are set
        so for variables it puts a placeholder of 'Undefined' for the value of variables defined after where they are used.
        all variables are initially set to undefined !!!
        functions sit in memory in their entirety
        hoisting is bad practice.

2. The second being (EXECUTION PHASE)
        in the execution phase we already have what had setup before
        namely Global Object, 'this', Outer Envrionment
        now it runs the your code!

`);
}
//showNotes_1();
//showNotes_2();
//paradmShift();