// Operators are functions!

// Special function that is syntactically
// (written) different or differently

// generally operators take two parameters and
// return one result

var a  = 3 + 4; // how does JS know to add?
/*
    its as though i declared a function
        function add(a,b) // except 
    instead of 'add' i used '+'
        function +(a,b) {
            return // add the two #s
        }

*/
// JS provides us with infix notation where
// the function name sites between parameters

console.log(a);

//other operators, infix notation functions 
var b = 4 - 3;
console.log(b);

var c =  4 > 3; //greater than operator 
// infix notation function return boolean
console.log(c);

// operators are special types of function that take
// in two parameters either side thanks to infix
// notations.

// ***********************************************
// there are things going on inside infix notation
// functions that are important to know about
// in part because of how this impacts how JS
// facilitates dynamic types as dont know ahead 
// of time what types are being used.