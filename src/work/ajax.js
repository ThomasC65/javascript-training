$.get('http://localhost:3000/api/users/', function (users) {
    console.log('receive users', users);

    users.sort((user1,user2) => user1.name<user2.name ? -1 : 1);


    const block=$('<ul>');
    users.forEach(function (users) {
        const user = $('<li>').text(users.name);

        block.append(user);

    });
    $('section.users').append(block)


    /*users.forEach(function (users) { autre façon
        const user = $('<p>').text(users.name);
        $('section.users').append(user)
    })*/

    /*const user = $('<p>').text(users.map(user => user.name));
    $('section.users').append(user);  affichage en ligne des noms*/
});

$.get('/api/users/admins', function (admins) {
    console.log('receive admin', admins.map(admin => admin.name));
})
