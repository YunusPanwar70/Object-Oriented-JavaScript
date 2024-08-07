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

function Admin(...args) {
    User.apply(this, args)
    this.role = 'super admin'
}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function (u) {
    users = users.filter(user => {
        return user.mail != u.email
    })
}
let userOne = new User('Ryu', 'Ryn@ninjas.com');
let userTwo = new User('Yoshi', 'yoshi@mariokorp.com');
let admin = new Admin('Shanu', 'shanu@ninjas.com')
let users = [userOne, userTwo, admin]
console.log(admin);