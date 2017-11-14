// Comparison operators
console.log(1 < 2 < 3); // evaluates to true | expected
console.log(3 < 2 < 1); // evaluates to true | unexpected

// the 2nd evals to true is left associativity
console.log(3 < 2); // evals to false, .then
console.log(false < 1); // js will try to coerce false to a number
var a = Number(false);// evals to 0
console.log(a); 

//false < 1 eval to true bcoz == 0 < 1

// more coercion
Number('3'); // 3
Number(undefined); // NaN - not a number
Number(null); // 0
Number('s'); // NaN

var b =  3 == 3; // true
var c = '3' == 3; // true : coercion
var d = '3' === 3; // false

var e = false == 0; // true
var f = null == 0; // false 
//exception cose Number(null) = 0
var g = null < 1; // true

var h = "" == 0; // true
// that means if you have
var i = "" == false; // evals to true

var j = '3' === 3; // false! tripple equals for the win

