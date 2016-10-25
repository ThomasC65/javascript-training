var users = require('../data').users;

users.forEach(function (user) {
    console.log('user name : ', user.name)
});
console.log(' ');
// no result sent by clog();
users.forEach(user =>console.log('user name : ', user.name));

//var admins = users.forEach(user => user.admin ? admins.push(user.name));
console.log(' ');

var admins= [];
users.forEach( function (user){
    if (user.admin===true){
        admins.push(user.name)
    }
});

console.log(admins);