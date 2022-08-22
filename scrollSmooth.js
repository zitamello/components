
const btnScroll = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1'); 

btnScroll.addEventListener('click', function(e) {
    const s1coords = section1.getBoundingClientRect();
    console.log(s1coords);


    //old way 
    //scrolling to 
    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top: s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // });

    section1.scrollIntoView({behavior: 'smooth'});
})
