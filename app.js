//Object.create and Pure Prototypal Inheritance

var person = {
    firstname : 'Default',
    lasatname : 'Default',
    greet: function(){
        return 'Hi ' + this.firstname;
    }
}
//very simple and straight forward way of creating objects based on other objects
//Note: this is a newer feature || older browsers use a polyfill!

//pollyfill
if(!Object.create){
    Object.create = function(o){
        if(arguments.length > 1){
            throw new Error('Object.create inplementation only accepts the first parameter.');
        }
        function F(){};
        F.prototype = o;
        return new F();
    };
}

var john = Object.create(person);
john.firstname = 'John';
john.lasatname = 'Doe';
console.log(john);