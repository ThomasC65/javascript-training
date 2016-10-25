var x = [0 , 5, 6, 12, 4, 8, 9];


console.log('frist element : ', x[0]);

console.log('3 element : ', x[2]);

x[2]=-50;
console.log('3 element modfier : ', x[2]);


x[-2]="what????";
console.log('3 element modfier : ', x[-2]);

//x[20]=3000;
//console.log('big table now : ', x);


x = [0 , 5, 6, 12, -4, 8, 9];

x.sort();
console.log('x sorted : ',x);

x.sort(function(a,b){
    if(a<b) {
        return -1;
    }else if (a>b) {
        return 1;
    }
    return 0;

    });

console.log('x correctly sorted : ', x);

//autrement
var sortFunction = (a,b)=> a<b ? -1 : 1;
x.sort(sortFunction);
console.log('cela sort bien : ',x );



var filtered = x.filter (function (number) {
    return number>=0;
    
});
console.log('filtered x : ',filtered);


var fat = (number) => number>=0;
filtered1=x.filter(fat);
console.log('filtered1 x : ',filtered1);

x[7]=50;
console.log('big table now : ', x);

x.push(51);
console.log('big table now : ', x);

var lastElement=x.pop();//supprime le dernier élement

console.log('sans le dernier element : ', x);

var fristElement=x.shift();//supprime le 1 élément
console.log('sans le premier element : ', x);

var addfristElement=x.unshift('le premier')//ajout d'un élement en premiere position
console.log('avec un nouveau premier element : ', x);

console.log(typeof 'I an a string');
console.log(typeof 2);
console.log(typeof {name : 'jo'});
console.log(typeof true);
console.log(typeof x);

console.log('is Array ? ', Array.isArray(x), ' autre ', Array.isArray({name : 'jo'}));





