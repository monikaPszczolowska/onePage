document.addEventListener("DOMContentLoaded", function () {

    var menu = document.querySelector('.nav__list');
    var button = document.querySelector('.nav__menu');
    var mediaQuery = window.matchMedia('(min-width: 600px)');

    function goToMobile() {
        button.classList.remove('hamburger-button-hidden');
        menu.classList.remove('mobile-menu-open');
    }

    function goToDesktop() {
        button.classList.add('hamburger-button-hidden');
        menu.classList.remove('mobile-menu-open');
    }

    button.addEventListener("click", function () {
        menu.classList.toggle('mobile-menu-open');
    })

    if (mediaQuery.matches) {
        console.log('Desktop!');
        goToDesktop();
    } else {
        console.log('Tablet!');
        goToMobile();
    }

    mediaQuery.addEventListener("change", function (event) {
        if (event.matches) {
            console.log('Desktop!');
            goToDesktop();
        } else {
            goToMobile();
            console.log('Tablet!');
        }
    })

});