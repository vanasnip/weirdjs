//'arguments' and SPREAD
//functions called comewith arguments variable

//invoke function
//execution context created
    //variable environment
    //this
    //Outer environment
    //'arguments' hold values passed to a function

function greet(firstname, lastname, language){
    // undefined coerces to false so the or alternative is selected
    firstname = firstname || 'Barbra';
    lastname = lastname || 'Evergreen';
    language = language || 'en';
    if (arguments.length === 0){
        console.log('Missing params...');
    } else{
        console.log(firstname,lastname,language);
        console.log(arguments);
    }  
}

greet();
greet('Jane');
greet('Jane', 'Doe');
greet('Jane', 'Doe', 'Anglais');


//SPREAD

function hello(first = 'jamez', last = 'bond', lang = 'Anglais', ...other){
    console.log(first, last, lang);
    if(other.length > 0){
        console.log(other);
    }
}
hello('van', 'man', 'japanese', 'england');
