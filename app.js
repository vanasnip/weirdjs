// Functional Programming
var arr1 = [1,2,3,4];

var arr2 = [];

for(var i=0; i<arr1.length; i++){
    arr2.push(arr1[i]*2);
}

console.log(arr2 +"\n-----------------");
//---more reusable way of getting on with it---


function mapForEach(arr, fn){
    var newArr = [];
    for(var i=0; i<arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}

function tripple(num){
    return num*3;
}

function greaterThan2(num){
    return num > 2;
}

var trippleFruit = mapForEach(arr1, tripple);
console.log(trippleFruit);

var checkFruitNo = mapForEach(arr1, greaterThan2);
console.log(checkFruitNo);


var checkPastLimit = function(limiter, item){
    return item > limiter;
}

var fourLimiter = mapForEach(arr1,checkPastLimit.bind(this, 1));
console.log(fourLimiter);

var checkPastLimitSimplified = function(limiter){
    return function(limiter, item){
        return item > limiter;
    }.bind(this, limiter);
}

var fourLimiterSimplified = mapForEach(arr1, checkPastLimitSimplified(1));
console.log(fourLimiterSimplified)