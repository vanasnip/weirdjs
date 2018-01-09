//BY THE WAY: doing operations with date - use momentjs instead
//:::DANGEROUS ASSIDE:::  do not use -for in- on arrays, especially if you add custom features

Array.prototype.myCustomFeature = 'cool!!';

var arr = ['John', 'Jane', 'Jim'];
for (var prop in arr){
    console.log(prop + ': ' + arr[prop]);
}