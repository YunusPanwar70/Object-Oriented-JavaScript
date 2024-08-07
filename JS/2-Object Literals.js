let userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',
    login() {
        console.log(this.email, 'has logged in');
    },
    logout() {
        console.log(this.email, 'has logged out');
    }
};
console.log(userOne.name);

// window console userONe.login()
// window console userONe.logout()