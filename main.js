const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$('.soft-menu__list').onclick = (e) => {
    e.stopPropagation()
}

$$('.soft-menu__item').forEach((item) => {
    // item.childNodes[1].PreventDefault;
    item.onclick = () => {
        
        // toggleNavMobile()
    };
});

$('.header-mobile-icon-search').onclick = () => {
    $('.header-mobile-search').classList.toggle('active')
}