/* require('navmenu.js'); */

/* -----------Smooth scroll -------------*/
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

/* ----------------------preloader---------------------------- */
window.addEventListener('load', () => {
    $('#status').fadeOut()
    $('#loadercontainer').fadeOut();
    $('#preloader').delay(300).fadeOut();
});


/*----------------------------- Menu button---------------------- */
const menuBtn = document.querySelector('#menubtn');

const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuItem1 = document.querySelector('.menu-Item1');
const menuItem2 = document.querySelector('.menu-Item2');
const menuItem3 = document.querySelector('.menu-Item3');
const menuItem4 = document.querySelector('.menu-Item4');
/* const navItems = document.querySelectorAll('.menu-Item'); */

let showMenu = false;

$(menuBtn).on('click', () => {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        /* menuItem.classList.add('show'); */
        /* navItems.classList.add('show'); */

        showMenu = true;
    } else if (showMenu) {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        /* menuItem.classList.remove('show'); */
        /* navItems.classList.remove('show'); */

        showMenu = false;
    }
});

/* -------------------------------Menu Items -----------------------*/
$(menuItem1).on('click', () => {
    $(menuItem1).addClass('active');
    $(menuItem2).removeClass('active');
    $(menuItem3).removeClass('active');
    $(menuItem4).removeClass('active');
});
$(menuItem2).on('click', () => {
    $(menuItem1).removeClass('active');
    $(menuItem2).addClass('active');
    $(menuItem3).removeClass('active');
    $(menuItem4).removeClass('active');
});
$(menuItem3).on('click', () => {
    $(menuItem1).removeClass('active');
    $(menuItem2).removeClass('active');
    $(menuItem3).addClass('active');
    $(menuItem4).removeClass('active');
});
$(menuItem4).on('click', () => {
    $(menuItem1).removeClass('active');
    $(menuItem2).removeClass('active');
    $(menuItem3).removeClass('active');
    $(menuItem4).addClass('active');
});

/* $('a').on('click', function(e){
    e.preventDefault()
    alert('clik');
}) */

/* Scroll Reveal */

window.sr = ScrollReveal();
sr.reveal('#home h1', {
    duration: 2000,
    origin: 'top'
});
sr.reveal('#home h2', {
    duration: 2000,
    origin: 'top'
});
sr.reveal('#home h3', {
    duration: 4000,
    origin: 'left',
    delay: 1000
});
sr.reveal('#home a', {
    duration: 4000,
    origin: 'left',
    delay: 1500,
});
sr.reveal('#about h1', {
    duration: 1000,
    origin: 'right',
    viewFactor: 0.2
});
sr.reveal('#about h2', {
    duration: 2500,
    origin: 'right',
    viewFactor: 0.2
});
sr.reveal('#about p', {
    duration: 1500,
    origin: 'right',
    delay: 500,
    viewFactor: 0.2
});
sr.reveal('#container', {
    duration: 1500,
    origin: 'right',
    delay: 1000,
    viewFactor: 0.2
});
sr.reveal('#container2', {
    duration: 1500,
    origin: 'right',
    delay: 1000,
    viewFactor: 0.2
});
sr.reveal('#banner h2', {
    duration: 2500,
    origin: 'right',
    viewFactor: 0.2
});
sr.reveal('#portfolio h1', {
    duration: 2000,
    origin: 'right',
    viewFactor: 0.2
});
sr.reveal('#portfolio nav', {
    duration: 2000,
    delay:1000,
    origin: 'right',
    viewFactor: 0.2
});
/* sr.reveal('#contact h1', {
    duration: 2000,
    origin: 'right',
    viewFactor: 0.2
});
sr.reveal('#contact h2', {
    duration: 2000,
    origin: 'right',
    viewFactor: 0.2
});
sr.reveal('#contact a', {
    duration: 2000,
    delay:500,
    origin: 'right',
    viewFactor: 0.2
}); */
