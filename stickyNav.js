//sticky navigation 

//old style
const initialCoords = section1.getBoundingClientRect();

window.addEventListener('scroll', function(e){
    if(window.scrollY > initialCoords.top){
        nav.classList.add('sticky')
    }else {
        nav.classList.remove('sticky');
    }
})

//new refactory