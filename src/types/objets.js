var x ={};
console.log('x : ',x, typeof x);

var john = {
    name : 'John',
    address : 'London',
    friend : {name : 'Jim', age : 12}
};

//console.log('addresse de john : ',john.address, 'et age de l"ami de john : ', john.friend.age);

var funkyCop = {name : 'Robocop'};
var ennemy = {name : 'Dick'};

funkyCop.foe=ennemy;

console.log('funck : ', funkyCop);

ennemy.foe=funkyCop;

funkyCop.name = "venere Robocop";
console.log('ennemy : ', ennemy);

ennemy.dead = true;
console.log('ennemy : ', ennemy);

delete funkyCop.foe;

console.log('funky now : ', funkyCop);