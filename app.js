//Building Object, setting the prototype specifically in Functions Constructors
//Functions Constructors, 'new and the history of JS

function Person(first, last){
    this.firstname = first;
    this.lastname = last;
}

//all functions get the .prototype property when used as a contructor to creat objects using new only
Person.prototype.getFullName = function(){
    return this.firstname + ' ' + this.lastname;
}


//Function COnstructors:
// a normal function that is used to create objects

var john = new Person('John','Doe'); //new keyword is an opperator
//new opperator creats a new empty object then the rest attaches to the rest
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function(){
    return this.lastname + ', ' + this.firstname;
}
//different ways to construct objects

//Properties are fine to sit in the function constructor, 
//however methods which are functions but more importantly are objects
//take up space in memory and it is very expensive computationally to have 1000 instances of objects, 
//each of which has multiple object /slash/ methods....what to do?
//better to have it once on the prototype and have it accessible to all instances via the prototype chian.

//########################################## DANGEROUS ASSIDE ##########################################

//the constructor is still just a functions so if you forget the new keyword all your 
//objects created from the constructor will be undefined

// all functions that are constructors have capital letters, this might help desern the missing new keyword

