class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    login() {
        console.log(this.email, 'just logged in');
    }
    logout() {
        console.log(this.email, 'just logged out');
    }
}
let userOne = new User('Ryu', 'Ryn@ninjas.com');
let userTwo = new User('Yoshi', 'yoshi@mariokorp.com');
userOne.login();
userTwo.logout();