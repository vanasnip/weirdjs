//Functional Programming Part 2
//Play with Underscorejs, see whats going on
//and how they use functional programming paradgm 
var arr1 = [1,2,3,4];

var arr6 = _.map(arr1,function(item){return item*3;})
console.log(arr6);
var bigLongArray = [2,3,4,5,6,7];
var arr7 = _.filter(bigLongArray, function(item){
    return item % 2 === 0;
});
console.log(arr7);