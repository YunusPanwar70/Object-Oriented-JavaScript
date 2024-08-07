class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this
    }
    updateScore() {
        this.score++
        console.log(this.email, 'score is now', this.score);
        return this
    }
}

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email
        })
    }
}
let userOne = new User('Ryu', 'Ryn@ninjas.com');
let userTwo = new User('Yoshi', 'yoshi@mariokorp.com');
let admin = new Admin('shaun', 'shaun@ninjas.com')
let users = [userOne, userTwo, admin];
admin.deleteUser(userOne)
console.log(users);

// userOne.login();
// userTwo.logout();
// userOne.updateScore();
// userOne.login().updateScore().updateScore().logout();