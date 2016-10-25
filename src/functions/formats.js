console.log('2+3 ',add(2,3));


var mult = function multiply(a,b) {
    return a*b;
}; //variable qui fait appel à une fonction donc peut changer au cour du temps

console.log('4*3 ', mult(4,3));

function add(a,b) {
    return a+b;
};//fonction donc invariable peut être placer à la fin



//fat arrow est une variable de type fonction
var divide = (a,b)=> a/b;

console.log('6/3 ', divide(6,3));