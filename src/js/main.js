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