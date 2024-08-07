// let nums = [1, 2, 3, 4];
// console.log(nums);

function User(name, email) {
    this.name = name;
    this.email = email;
    this.online = false;
    this.login = function () {
        console.log(this.email, 'has logged in');

    }
}

User.prototype.login = function () {
    this.online = true;
    console.log(this.email, 'has logged in');
}
User.prototype.logout = function () {
    this.online = false
    console.log(this.email, 'has logged out');
}
let userOne = new User('Ryu', 'Ryn@ninjas.com');
let userTwo = new User('Yoshi', 'yoshi@mariokorp.com');
console.log(userOne);
userTwo.login();