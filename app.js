//Dangerous Aside
// reads your code and trys to determine what you intend to do.
//Dangerous aside : always put in semi collons;
//syntax parser sees when you hit enter,
// if there is no semi-collon it replaces enter character
// automatic semi collon insertion is BAD!!!
function getPerson(){
    return {
        firstname: 'ivan'
    };
}

console.log(getPerson());