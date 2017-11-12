//Scope chain b


function b() { //Sitting on top of the global environment in the stack
    console.log(myVar); // 1
}// attachted to the global object

function a() {
    function c() {//Sitting on top of the a() envitonment
        console.log(myVar);
    }
    var myVar = 2;
    b();// 1
    c();// 2
}

var myVar = 1;
a();
//c(); // not defined error