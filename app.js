//Reflection & Extend
//Reflection: An object can look at itself, listing and changing its properties and methods
var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName : function(){
        return this.firstname + ' ' + this.lastname;
    }
}

var john = {
    firstname: 'John',
    lastname: 'doe'
}

// don't do this EVER! For demo purposes only!!!
john.__proto__ = person;

for (var prop in john){
    if(john.hasOwnProperty(prop)){
        console.log(prop + ': ' + john[prop]);
    }
}

var jane = {
    address: '111 Main St',
    getFormalFullName: function(){
        return this.lastname + ', ' + this.firstname;
    }
}

var jim = {
    getFirstName: function(){
        return firstName;
    }
}

_.extend(john, jane, jim);

console.log(john);