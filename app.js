//Closures
function greet(whattosay){
    //when this execution context if popped off
    //the execution stack, its variables remain
    // available and accessible as the outer
    // environment for functions within this execution
    // context
    return function(name){
        console.log(whattosay + ' ' + name);
        // what to say is not defined in this execution
        // context, so JS looks for it in outer environment
    }
}

greet('Hello')('Ivan');
sayHi = greet('Hi');
sayHi('Ivan');

