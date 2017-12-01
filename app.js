//Closures continued
// function factories
function makeGreeting(language){
    return function(firstname, lastname){
        if(language === 'en'){
            console.log('Hello',firstname,lastname);
        }
        if(language === 'es'){
            console.log('Hola',firstname,lastname);
        }
    }
}
//new execution context created with outer environment variables available
var greatTheBritish = makeGreeting('en');
//new execution context created with outer environment variables available
var greatTheSpanish = makeGreeting('es');

//access outer environment in search of language variable
greatTheBritish('Some', 'Trollope');
//access outer environment in search of language variable
greatTheSpanish('Rosita','Rodriges');