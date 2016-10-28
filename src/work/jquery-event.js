
    function displaySearch(term) {
        clear('section');

        const contents=search(term);

        /*contents.forEach(function (content) {
         const node = document.createTextNode(content)
         document.querySelector('body').appendChild(node);

         });*/
        console.log(contents.join(' '));

        contents.forEach(function (content) {
            const pElement = $('<p>').text(content);
            $('section.search').append(pElement)
        })

        //$('body').text(contents.join(' '))

    }

function displaySearchValue() {

    displaySearch($('input.search').val());

}

$('button').on('click',displaySearchValue);

//        const term=$('input.search')
//        console.log('test', term.val());
//displaySearch(term.val());



function clear(localisation) {
    $(localisation).empty();

}



