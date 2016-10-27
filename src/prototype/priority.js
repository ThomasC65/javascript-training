function Dinosaurus(name) {
    this.size = 12;
    this.name = name;

}

Dinosaurus.prototype.age = -65000000;
Dinosaurus.prototype.size = 20;

const denver = new Dinosaurus('Denver');
//new gives access to a prototype

const petitPied = new Dinosaurus('Petit Pied');
petitPied.size = 3;

console.log('Denver size : ', denver.size);
//console.log('Denver size : ', denver.prototype.size); Denver Objet n'a pas de prototype car il nest pas construit à partir du prototype