function Dinosaurus(name) {
    this.size = 12;
    this.name = name;

}

Dinosaurus.prototype.age = -65000000;


const denver = new Dinosaurus('Denver');

function Carnivore() {

}

Carnivore.prototype.eat = function (obj) {
    console.log(this.name + ' eats ' +obj.name);
}

const tRex = new Carnivore();
tRex.name = 'TRex';

const eating = tRex.eat;
eating(tRex);

BoundToDenver = eating.bind(denver)
console.log('bound eating to denver');
BoundToDenver(tRex);

eating.bind(denver)(tRex);
eating.bind(tRex)(denver);


