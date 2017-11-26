//Objects, functions and this
// functions invoked a new execution context is created as discussed
//execution context created and put on execution stack

// variable environment
// outer environment 
// variable called 'this'
// 'this' can be different things
// depending on how the function is invoked

//console.log(this); // this points to gloabal obj at this lvl in the code

function a(){
    console.log(this);
    this.newVar = 'hello';
}
var b = function(){
    console.log(this);
}
a();
b();

console.log(newVar);

/////////////////////////////

var c = {
    name: 'the c obj',
    log: function(){
        var self = this;
        self.name = 'updated c obj';
        console.log(self);

        var setName = function(newName){
            self.name = newName;
        }
        setName('Updated again!');
        console.log(self);
    }
}
// the object that contains the function is what this is reffering to
// in the case of a and b the function is directly attached to the window object
// in the case of c the function is dirctly attached to the c object.
// whatever object the function sits on is what this is refering to...

// functions in effect are methods of an object
console.log(c.name);
c.log();
console.log(c.name);