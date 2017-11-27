//immediately invoked function expressions

//function statement
function greet(name){
    console.log('hello', name);
}
greet('Ivano');

// using a function expression
var greetFunc = function(name){
    console.log('hello', name);
}
greetFunc('Ivano');

//using an immediately invoked function expression (IIFE)
var greeting = function(name){
   // console.log('hello', name);
    return 'hello' + name;
}('ivano');//invokes the function 

3;

(function(name){
    console.log('hello', name);
})('Ivano');