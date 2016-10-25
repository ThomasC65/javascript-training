var x = [0 , 5, 6, 12, -12, 4, 8, 9];

var sortFunction=function(a,b){
    if (a===b){
        return 0;
    }
    return a<b ? -1:1;
};

console.log(x);
console.log(x.sort(sortFunction));

var users=require('../data').users;
console.log('users', users);
console.log('name', users.map(user=>user.name));

function sortUsers(user1,user2) {
    if (user1===user2){
        return 0
    }
    return user1.name<user2.name ? -1 : 1;

};

console.log('users', users.map(user=>user.name).sort(sortUsers));
