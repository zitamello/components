
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const operationsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab');
    //guard close
    if (!clicked) return;

    //active tabs
    tabs.forEach(tab => tab.classList.remove('operations__tab--active'));
    operationsContent.forEach(content => content.classList.remove('operations__content--active'));

    clicked.classList.add('operations__tab--active');

    //Activate content area
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})