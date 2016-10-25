 var string = "Hello World";

 string+=" !";
 console.log('string : ', string);

 var index = string.indexOf('lo');
 console.log('index of lo : ', index);

 /*function contains(haystasck, needle) {

  var index = haystasck.indexOf(needle)

  if (index>=0) {

  return true
  }else{
  return false}
  }*/

 function contains(haystasck, needle) {
  return haystasck.indexOf(needle)>=0;

 }

 var isTrue = contains('jack','ack');
 var isAlsoTrue = contains('jim','jim');
 var isFalse = contains('MacDo', 'ack')



 console.log(isTrue, isAlsoTrue, isFalse);
 console.log('Jack is back'.includes('ack'));

 /**
  *Expression régulière
  */

 var hello = "Hello World";
 var found = hello.search(/orl/);
 var alsofound = hello.search(/world/i);


 console.log('found : ',found, 'alsofound : ', alsofound);

 // /i for case insensitive : majuscule et minuscule
 var x = /(.)*(world)/i.test('Hello World');
 console.log('x : ',x);

 //it is conform : l'objets (.)*(world et bien contenu
 var strangelyTrue =/(.)*(world)/i.test('Hello World here');
     console.log('strangelyTrue : ', strangelyTrue);

 var moreStrict =/(.)*(world)$/i.test('Hello World here');
 console.log('moreStrict : ', moreStrict);


 var test = 'Hello world !';

 // substring va imprimer les caractères entre les 2 index donnés
 //substr va imprimer les caractère entre l'index donné en 1 et le nombre de caractère demandé
 console.log('substr(2, 3): '   + test.substr(2, 3));
 console.log('substring(2, 5): ' + test.substring(2, 5));
//même réponse mais pas même demande

 console.log('substr(-1, 5): '   + test.substr(-1, 4));
 console.log('substring(-1, 5): ' + test.substring(-1, 4));

 console.log('substr(8, -1): '   + test.substr(8, -1));
 console.log('substring(8, -1): ' + test.substring(8, -1));


 console.log('alphABET'.toUpperCase()); // 'ALPHABET' tout en majuscule
 console.log('alphABET'.toLowerCase()); // 'alphabet' tout en minuscule

 var orig = '    test  test  '; //avant test des tab après des espaces // peu aussi supprimer des saut de ligne
 console.log(orig.trim()); // 'test  test' supprime les espaces avant et après le text