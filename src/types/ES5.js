var topics = require('../data').topics;



//var test = topics.filter(callback[, Leonard]);

//console.log(test);
//topics.users.name===Leonard


var result = topics.filter(function (topic) {
    return topic.user.name=== 'Leonard';
});

//console.log(result);


var result2 = topics.filter(topic => topic.user.name=== 'Leonard');
console.log(result2);

var titles = topics.map(function (topic) {
    return topic.title;
});
//console.log(titles);

//var titles2 = topics.map(topic => topic.title);
//console.log(titles2);


/*var tag = topics.some(function (topic) {
    if(topic.user.tags.includes('violence'){
        return true
    }
})*/

/*var tag = topics.some(function (topic) {
    return topic.tags.includes("violence")
});*/

var tag = topics.some(topic => topic.tags.includes("violence"));
console.log(tag);



/*var shelmes = topics.some(function (topic) {
    return topic.comments.includes(user.filter(function (user) {
        return user.name=== "Sheldon";
    });
});


  //  topics.filter(topic => topic.comments.includes(users.name=== 'Sheldon'));
console.log(shelmes);*/


var shelmes  = topics.filter(function (topic) {

   return topic.comments.some( function (comment){
        return comment.user.name==='Sheldon'
    });
}).map (function (topic) {
    return topic.title;
});

/*var titlesSheldon =   shelmes.map (function (topic) {
    return topic.title;
});*/

var result3 = topics.filter(topic => topic.comments.some(comment => comment.user.name=== 'Sheldon')).map (topic => topic.title);

console.log(shelmes);

console.log(result3);


//les id des comment écrit par Penny
var idPenny= [];
topics.forEach( function (topic){
    topic.comments.forEach( function (comment) {
        if (comment.user.name ==='Penny')
            idPenny.push(comment.id)
    })
});
console.log(idPenny);

var idPenny2= [];
topics.forEach(topic =>topic.comments.forEach(comment => comment.user.name ==='Penny' ? idPenny2.push(comment.id) : 0));
console.log(idPenny2);

/*var cont= [];
topics.forEach( function (topic){
    topic.comments.forEach( function (comment) {
        comment.content.forEach (function (content) {
            if (content.user.admin===false)
                cont.push(content);
        });
        });
    });*/

var tableTag =[];

topics.forEach(function (topic){
    topic.comments.forEach(function (comment) {
        if(!comment.user.admin && comment.tags != undefined){
            comment.tags.forEach(function (tag) {
                    tableTag.push(comment.content);
                })
        }

    })
});



/*var cont= [];
topics.forEach( function (topic){
    topic.comments.forEach( function (user) {
            if (user.admin===false)
                cont.push(comments.content);

    });
});*/

console.log(tableTag);