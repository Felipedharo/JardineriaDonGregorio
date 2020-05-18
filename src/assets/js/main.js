// Variables

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');

let cerrado = true;


$(function() {
    $(document).scroll(function() {
        var $nav = $('.navbar-fixed');
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});



function apertura() {
    if (cerrado) {
        menu.style.width = '70vw';
        cerrado = false;
    } else {
        menu.style.width = '0%';
        menu.style.overflow = 'hidden';
        cerrado = true;
    }
}


window.addEventListener('click', function(e) {
    console.log(e.target);
    if (cerrado == false) {
        let span = document.querySelector('span');
        if (e.target !== span && e.target !== abrir) {
            menu.style.width = '0%';
            menu.style.overflow = 'hidden';
            cerrado = true;
        }
    }
});