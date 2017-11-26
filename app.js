// no function overloading in JS
// function of the same name that has different number os params

function greet(firstname, lastname, language){
    language = language || 'en';
    if (language === 'en') {
        console.log('Hello', firstname, lastname);
    }
    if (language === 'es') {
        console.log('Hola', firstname, lastname)
    }
}

function greetEng(firstname, lastname){
    greet(firstname, lastname, 'en');
}
function greetEsp(firstname, lastname){
    greet(firstname, lastname, 'es');
}

greetEng('Ivano','Mams', 'en');
greetEsp('Ignacio','Suares', 'es');

// creating simpler functions 