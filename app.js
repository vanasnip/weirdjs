// Objects and dot notation

var person = new Object();

person['firstname'] = 'Ivan';
person['lastname'] = 'Mams';

console.log(person.firstname);
console.log(person.lastname);

person.address = new Object();
person.address.street = "111 Main St.";
person.address.city = 'New york';
person.address.state = 'NY';

console.log(person.address.street);
console.log(person.address.city);
console.log(person['address']['state']);