// Default values

function greet(name){
    name = name || '<Your name here>';
    // here JS will return the first value that is coercable
    // to true. if the first value is undefined 
    // then the second value will be returned

    // this also has an impact on 
    // 0 || 1 returns 1
    // undefined || 'hello' returns hello
    // null || 'hello' returns hello
    // "" || "hello" returns hello
    console.log('Hello ' + name);
}
// calling it without a parameter
greet('ivan');
greet();//this wont throw error, hello undefined

