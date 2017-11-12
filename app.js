// myVar is defined 3 times and in the manner 
// that they are deifned they are distinct, 
// unique and they dont touch each other.

function b() {
    var myVar;
    console.log(`lvl b: ${myVar}`);
    // current running context is the global b();
    
}

function a() {
    var myVar = 2;
    console.log(`lvl a: ${myVar}`);
    // current running context is the a() 
    b();// creates b() new execution 
        // with its own variable environment
}

var myVar = 1;
console.log(`lvl glo: ${myVar}`);

a(); // creates a() new execution 
     // with its own variable environment

//scope where are we able to see the varirable!

console.log(`lvl glo: ${myVar}`); 
// current running context is the global 
// execution context
