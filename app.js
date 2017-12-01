//Closures part 2

function buildFunctions(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        arr.push(
            function(){
                console.log(i);
            }
        )
    }
    return arr;
}

var fs = buildFunctions();

// all 3 are being executed later and will return
// value for i now and not when created
// accessing the enclosed value of i in memory
fs[0]();
fs[1]();
fs[2]();

// making it work

function buildFunctions2(){
    var arr = [];
    for(var i = 0; i < 3; i++){
      arr.push((function(x){
                return function(){
                    console.log(x);
                }
            }(i))); // executing each time to get i
    }
    return arr;
}
var fs2 = buildFunctions2();

fs2[0]();
fs2[1]();
fs2[2]();

function buildFunctions3(){
    var arr = [];
    for(var i = 0; i < 3; i++){
        let j = i; // new let keyword confines varibable to the block
        // this will point j at a different spot in memory each time
      arr.push(function(){
                    console.log(j);
                }
            ); // executing each time to get i
    }
    return arr;
}
var fs3 = buildFunctions3();

fs3[0]();
fs3[1]();
fs3[2]();