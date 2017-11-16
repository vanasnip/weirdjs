// Objects literals

var Ivan ={
    firstname: 'Ivan', 
    lastname: 'Mams',
    address: {
        street: '111 Main St.',
        city: 'New York',
        state: 'NY'
    }
};

function greet(person){
    console.log(`Hi ${person.firstname}`);
}
greet(Ivan);
greet({ //objects created on the fly...
    firstname:'Lucy', 
    lastname:'Lu'
});

