//Built in function constructors
var a = new Number(3);
var b = new String('John');
var c = new Date('08/01/2018');

String.prototype.isLenghtGreaterThan = function(limit){
    return this.length > limit;
}
console.log(b.isLenghtGreaterThan(3)); //true

Number.prototype.isPositive = function(){
    return this > 0;
}
//3.isPositive() wont work because JS wont convert numbers into objects automatically 
//like the convert strings into objects automatically...
//for this to work we must invoke the new key word...fortunately we already did with a
console.log(a.isPositive());

//DO NOT USE THESE UNLESS YOU HAVE TO!!! THEY JUST LOOK TOO MUCH LIKE PRIMITIVE TYPES WHEN THEY AREN'T, THEY ARE OBJECTS!
var numA = 3;
var numB = new Number(3);

var test1 = (numA == numB);//o: true
var test2 = (numA === numB); //o: false 