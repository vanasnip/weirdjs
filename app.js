//Object-Oriented javascript and prototypal Inheritance
//classical vs prototypal inheritance

//classical is whats currently best known and popular || how it has been done for a long time
//a way of sharing propeties and methods || not the only method ...very verbose

//prototypal inheritance
//simple, flexible, extensible and easy to understand - not perfect

//Inheritance: one object get access to the propeties and methods of another object

var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        console.log(fullname);
        return fullname;
    }
}

var john = {
    firstname: 'John',
    lastname : 'Doe'
}

//Doing something you should never ever do....this is just to illustrate...its a performance problem..>>
john.__proto__ = person;//<<< never ever do this!!!! __proto__ is named such that you'd never accidentally type this
john.getFullName(); //o:John Doe


var jane = {
    firstname: 'Jane'
}

jane.__proto__ = person;//<<< never ever do this!!!!
jane.getFullName();//o: Jane Default





