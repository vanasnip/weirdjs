// Call(), apply(), bind()
//properties & methods on a function

//NAME - optional can be anonymous
//CODE - invokable with ()

//call()
//apply()
//bind()

// all three call, apply, bind methods relate to 'this'

var person = {
    firstname: 'john',
    lastname: 'doe',
    getFullName: function(){
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
}

var logName = function(lang1, lang2){
    console.log('logged: ' + this.getFullName());
    console.log('Arguments:', lang1, lang2);
    console.log('-------------------');
}
var logPersonName = logName.bind(person);

logPersonName('en');

logName.call(person, 'en','es');

logName.apply(person, ['es','en']); //requires array


//----------------use cases 1------------------//

// function borrowing
var person2 = {
    firstname: 'Jane',
    lastname: 'Doe'
    //we dont have a getFullName() so we will borrow it
}

var borrowedFunc = person.getFullName.apply(person2);

console.log(borrowedFunc, '\n*---------- borrowed----------*');

//----------------use cases 2------------------//
// function currying

function multiply(a,b){
    return a*b;
}

var double = multiply.bind(this, 2);
console.log(double(4) + '\n*---------- curried----------*');

var tripple = multiply.bind(this, 3);
console.log(tripple(4) + '\n*---------- curried----------*');
