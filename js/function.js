var burgerIcon  = document.querySelector('.burger-icon');
var navLogo     = document.querySelector('nav#menu .logo');
var listes      = document.querySelectorAll('nav#menu ul li');

var listenerFunction = {
    openNav : () => {
        navLogo.style.display = 'block';
        for (let index = 0; index < listes.length; index++) {
            const elt = listes[index];
            elt.style.display = 'block';
        }
    },

    closeNav : () => {
        burgerIcon.style.display = 'none'
    }
}

var setupListener = () => {
        burgerIcon.addEventListener('mouseover', listenerFunction.openNav);
    }
