//typeof, instanceof and figuring out what something is
var a = 3;
console.log(typeof a); //number

var b = "Hello";
console.log(typeof b); //string

var c = {};
console.log(typeof c); //object

var d = [];
console.log(typeof d); // weird! //object
console.log(Object.prototype.toString.call(d)); // better! //object array

function Person(name) {
    this.name = name;
}

var e = new Person('Jane');
console.log(typeof e); //object
console.log(e instanceof Person); // true

console.log(typeof undefined); // makes sense //undefined 
console.log(typeof null); // a bug since, like, forever... //object

var z = function() { };
console.log(typeof z);// function

