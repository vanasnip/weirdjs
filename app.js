//ES6 And Classes

//class keyword

class Person { // <<<< this is still just an object 
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet(){
        return 'Hi ' + this.firstname; //this keyword to reference current execution context
    }
}
var john = new Person('John', 'Doe');

class InformalPerson extends Person {
    constructor(firstname, lastname){
        super(firstname, lastname); // super keyword draws down passed in values
    }
    greet(){
        return 'Yo ' + this.firstname; // overwrite methods.
    }
}
var jane = new InformalPerson('Jane', 'Doe');