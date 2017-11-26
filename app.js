//Arrays

var arr = [
    1,
    false,
    {
        name:'Ivano',
        address: 'in the city'    
    },
    function(name){
        var greeting = 'Hello';
        console.log(greeting, name);
    },
    'whatsup'
];
//js arrays can be different types
console.log(arr);
arr[3](arr[2].name); //this is madness!!!
