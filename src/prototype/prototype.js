/*
*Note that we have here a Uppercase
* It's just a convention
 */


function Dinosaurus(name) {
    this.size = 12;
    this.name = name;
    
}

Dinosaurus.prototype.age = -65000000;


const denver = new Dinosaurus('Denver');
//new gives access to a prototype

const petitPied = new Dinosaurus('Petit Pied');
petitPied.size = 3;


console.log('Denver name : ', denver.name);
console.log('Denver size : ', denver.size );
console.log('petitPied size : ', petitPied.size );

console.log('Denver age: ', denver.age);
console.log('petitPied age: ', petitPied.age );

function TRex() {
    this.name = 'Rex'
    }

function Carnivore() {

}

Carnivore.prototype.eat = function (obj) {
    console.log(this.name + ' eats ' +obj.name);
}
// Ecrit comme cela il me prend en compte que le dernier prototype écrit
//TRex.prototype = Dinosaurus.prototype;
//TRex.prototype = Carnivore.prototype;


//héritage multiple grâce au prototype
Object.assign(TRex.prototype, Dinosaurus.prototype);
Object.assign(TRex.prototype, Carnivore.prototype);

const rex = new TRex();
console.log('Rex age: ', rex.age);
console.log('Rex size: ', rex.size);
rex.eat(petitPied);