//IIFE safe code
var greeting = 'Hola';
(function(global,name){
    global.greeting = 'Hello';
    // pass by ref so will change source of external as wee
    console.log(greeting + ' ' + name);
}(window, 'IFFE'));

console.log(greeting);
