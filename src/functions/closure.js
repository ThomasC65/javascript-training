var denver = {name : 'Denver', age : 14};
var petitPieds = {name : 'Petit Pied', age : -65000000};


function pure(a,b) {
    //a.age = 15; NOT PURE
    return a.age + b.age; //Pure de change pas les variables en entrée
}

console.log('pure ', pure(denver,petitPieds));

function unpure() {
    //console.log ou screen() : will modify a stream
    //capture the external petitPied object
    //depends on external context, and not only params
    console.log('kick : ' + petitPieds.name);
}
unpure();