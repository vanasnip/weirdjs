// Objects and Json are different;
//json doesnt allow functions as values
var objectLiteral = {
    firstname: 'Ivan',
    isAProgrammer: true
}


var myJSON = { // stricter rules
    "firstname": "Mary", //property names have to be in ""
    "isAProgrammer": true
}

// all json is valid object literal notation
// bit not all object literal notation is valid json
// gotta have those property names in quotes!

// because of json's popularity JS comes with json bells

var OLNtoJSON = JSON.stringify(objectLiteral);
console.log(OLNtoJSON);

var JSONtoOLN = JSON.parse('{"firstname": "Mary", "isAProgrammer": true}');
console.log(JSONtoOLN);