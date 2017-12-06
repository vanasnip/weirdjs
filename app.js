// Closures & callbacks

function sayHiLater(){
    var greeting = 'Hi';
    setTimeout(function(){
        console.log(greeting);
    }, 3000);
}

sayHiLater();

// $('button').click(function(){
//     //example of use of function expressions
//     //and first class functions
// });

//Call back function, call a function and give it a function, and when its done it calls given function

function tellMeWhenDone(callback){
    var a = 1000;
    var b = 2000;

    callback();
}

tellMeWhenDone(function(){console.log('I am done.')});
tellMeWhenDone(function(){console.log('I am done once again.')});
