
//MENU FADE ANIMATION

const nav = document.querySelector('.nav');

const handlerOverFunction = function(e, opacity){
    if(e.target.classList.contains('nav__link')){
        const overed = e.target;
        const sibling = overed.closest('.nav').querySelectorAll('.nav__link');
        const logo  = overed.closest('.nav').querySelector('img');
        const brand = overed.closest('.nav').querySelector('h2');
        

        sibling.forEach(el => {
            if(el !== overed) el.style.opacity = this;
        });
        logo.style.opacity = this;
        brand.style.opacity = this;

    }
}



//USING BIND to pass arguements to event handlers
nav.addEventListener('mouseover', handlerOverFunction.bind(0.5));

nav.addEventListener('mouseout', handlerOverFunction.bind(1.0));
