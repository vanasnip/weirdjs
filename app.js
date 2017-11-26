// Functions are Objects
// first class functions 
//everything that can be done with other types
// can be done with functions

// has all the features of a normal object
//One can attach properties and methods to functions 

function func(){
    let sombrero = 'hat';
    return sombrero;
}

func.pantalones = 'trousers';

function greet() {
    console.log('hi');
}
greet.language = 'english';

// function statements vs function expression
// expressions evaluate to some value - results in a value

//eg  var a; a = 3;//returns 3 or 1 + 2 also returns 3 evaluates

var a;

if(a === 3){ // if is a statement, it doesnt return any value
    // on the other hand a === 3 is an expression that returns a value
}

////////////////////////////////////////////////////////////
function say(){ //function statement, hoisted, object
    //named function: name property of function object is 'say'
    //given address in memory to where say is
    console.log('hello');
}

//annonymousGreet() // not hoisted as variable will be undefined on lookup
//must be called after

var annonymousGreet = function() { // function expression
    //annoymous function: name property of function object is annonymous
    //function object placed where annonymousGreet is placed
    console.log('hello');
}

function log(a){
    console.log(a);
}
function log2(a){
    a();
}


log(3);
log('hello');
log({key:'value'});
log2(function(){console.log('hi');});