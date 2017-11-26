//by value vs by reference

// eg 
var a = 3;//'some primitive value';

var b = a; // or pass a function
// a new memory location is creted and a copy of a is placed there
//this is what is called by value;

//in the case of ojects,
// I still get a memory location value for that object & this includes functions,
//very much in the way I get a memory location for my variable

var c = {
    object: 'non primitive type',
    num: 4,
    funcs: function(){
        return `still an objext with name property,
        code property
        `;
    }
}

var d = c; //d is pointed to the exact location of c
// no new object is created, 2 names pointing to same object
// this is what we call by reference

//Examples by value
//changing a doesnt change b
console.log(a,b); //3 3
a = 2;
console.log(a,b); //2 3

//Examples by reference // all objects includes functions
console.log(c.num, d.num); //4 4
c.num = 9;
console.log(c.num, d.num); //9 9
//////////////////////////////////////////////////////
var f = {greeting : 'hello'}
var g = f;
console.log(`f, g : ${f.greeting}, ${g.greeting} `);
// hello, hello

function changeGreeting(obj){
    obj.greeting = 'hola';
}

changeGreeting(g);
console.log(`f, g : ${f.greeting}, ${g.greeting} `);
// hola, hola for both because they are the same object

f = {greeting: 'gutentag'};
console.log(`f, g : ${f.greeting}, ${g.greeting} `);
//brand new memory space for f
/////////////////////////////////////////////////////////

console.log(`
{} === {}: ${{} === {}}
{} == {}: ${{} == {}}
different objects are never equal even if they are exaclty the same
`); //false, false
// equivalency opperations on object are only true if its the same
// object in memory. literally referencing the same thing, otherwise
// it will always be false even if its an exact copy
