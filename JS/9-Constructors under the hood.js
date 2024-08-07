function User(name, email) {
    this.name = name;
    this.email = email;
    this.online = false;
    this.login = function () {
        console.log(this.email, 'has logged in');

    }
}

let userOne = new User('Ryu', 'Ryn@ninjas.com');
let userTwo = new User('Yoshi', 'yoshi@mariokorp.com');
console.log(userOne);
userTwo.login();