//Scope chain

// execution context has access to outer environment
// except global execution context

// In a discussion about lexical environment
// Q: where does function b() sit lexically?
function b() { //A: on top of the global environment
    console.log(myVar); // 1
}

// where functions are concerned
// order of invokation is what is important
// order of declaration in the same execution
// context has no baring on anything,
// except its good practice to place dependancies 
// above where they are a called.

// in the case of b() the variable myVar isnt found in
// its execution context in its scope,
// so JS searches in the next immediate external
// environment for a definition of myVar, if its not 
// it will continue until it reaches the global
// execution context, where it would be an error if
// its never declared, or undefined if hoisted or 
// if its declaired and assigned a value then 
// that value will be returned

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();