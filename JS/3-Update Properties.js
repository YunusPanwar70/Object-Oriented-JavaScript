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
// userOne.name = 'Yoshi';

// console.log(userOne['email']);

// console.log(userOne[name] = 'mario');
// console.log(userOne);


// let prop = 'name'
// undefined
// userOne[prop]
// 'Ryu'
// prop='email'
// 'email'
// userOne[prop]
// 'ryu@ninjas.com'
// userOne.prop work nahi karega [] ish me dene par work karega
// undefined