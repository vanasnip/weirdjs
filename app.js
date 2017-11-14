// Existance and Boolean

var a;

// goes to the internet and looks for a value
// a = null;
a = 0; // zero converts to false.

if(a || a === 0){ // taking advantage of coercion
    console.log('something is there');
} else {
    console.log('nothing is there');
}