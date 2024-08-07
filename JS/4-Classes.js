class User {
    constructor(name, email) {
        this.email = email;
        this.name = name;
    }
}
let userOne = new User('Ryn@ninjas.com', 'Ryu');
let userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
console.log(userOne);
console.log(userTwo);
console.log(User);

// the 'new' keyword
// - create a new empty Object
// - sets the values of 'this' to be the new empty Object
// - calls the constructor method