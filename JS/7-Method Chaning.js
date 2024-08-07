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
let userOne = new User('Ryu', 'Ryn@ninjas.com');
let userTwo = new User('Yoshi', 'yoshi@mariokorp.com');
// userOne.login();
// userTwo.logout();
// userOne.updateScore();
userOne.login().updateScore().updateScore().logout();