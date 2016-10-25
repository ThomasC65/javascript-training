function add(a,b) {
    return a+b;
};

//autre façon une variable minus qui est une fonction... marche de la meme manière
var minus = function (a,b) {
    return a-b;
};

function divide(a,b) {
    return a/b;
};

function multiply(a,b) {
    return a*b;
};

console.log('2*6 : ', multiply(2,6));
console.log('2-6 : ', minus(2,6));

function operation (op, x, y){
return op(x,y)
};

console.log(operation(multiply,56,59));

var ops=[add, divide, multiply, minus];

var randomElement= ops[Math.floor(Math.random() * ops.length)];
console.log('random calcul : ', operation(randomElement,56,59));
